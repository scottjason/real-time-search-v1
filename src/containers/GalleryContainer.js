import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import {fetchByTerm} from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      cacheByTerm: {},
    };
  }
  static defaultProps = {
    defaultTerm: 'nature',
    defaultPage: 1,
  }
  componentDidMount() {
    this.performSearch(this.props.defaultTerm, this.props.defaultPage);
  }
  performSearch = (term, page) => {
    if (this.state.cacheByTerm[term] && this.state.cacheByTerm[term][page]) {
      let images = this.state.cacheByTerm[term][page];
      this.setState({images})
      return;
    }
    fetchByTerm(term).then(res => {
      let totalPages = res.total_pages;
      let images = res.results.map(img=> {
        let imageUrl = img.urls.small;
        let id = img.id;
        return { id, imageUrl }
      })
      let cacheByTerm = this.state.cacheByTerm;
      cacheByTerm[term] = {};
      cacheByTerm[term][page] = images;
      this.setState({images, cacheByTerm})
    });
  }
  render() {
    return(
      <Gallery
        images={this.state.images}
        performSearch={term=> this.performSearch(term)}
      />
    )
  }
}

export default GalleryContainer;