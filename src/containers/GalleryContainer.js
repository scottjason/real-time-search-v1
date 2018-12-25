import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import {fetchByTerm} from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchCache: {},
    };
  }
  static defaultProps = {
    defaultTerm: 'nature',
    defaultPage: 1,
  }
  componentDidMount() {
    const { defaultTerm, defaultPage } = this.props;
    this.performSearch(defaultTerm, defaultPage);
  }
  isInCache(term, page) {
    return this.state.searchCache[term] && this.state.searchCache[term][page];
  }
  getFromCache(term, page) {
    return this.state.searchCache[term][page];
  }
  performSearch = (term, page) => {
    if(this.isInCache(term, page)) {
      let images = this.getFromCache(term, page);
      this.setState({images});
      return;
    }
    fetchByTerm(term).then(res => {
      let totalPages = res.total_pages;
      let images = res.results.map(img=> {
        let imageUrl = img.urls.small;
        let id = img.id;
        return { id, imageUrl }
      })
      let searchCache = this.state.searchCache;
      searchCache[term] = {};
      searchCache[term].totalPages = totalPages;
      searchCache[term][page] = images;
      this.setState({images, searchCache})
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