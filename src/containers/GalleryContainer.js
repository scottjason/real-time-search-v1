import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import {fetchByTerm} from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  static defaultProps = {
    defaultTerm: 'nature',
  }
  componentDidMount() {
    this.performSearch(this.props.defaultTerm);
  }
  performSearch = term => {
    fetchByTerm(term).then(res => {
      let images = res.results.map(img=> {
        let imageUrl = img.urls.regular;
        return { imageUrl }
      })
      this.setState({images})
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