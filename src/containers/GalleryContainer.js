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
  fetchPrev = term => {
    let page = this.state.page - 1;
    this.performSearch(term, page);
  }
  fetchNext = term => {
    let page = this.state.page + 1;
    this.performSearch(term, page);
  }
  performSearch = (term, page) => {
    if(this.isInCache(term, page)) {
      let images = this.getFromCache(term, page);
      this.setState({images, page})
      return;
    }
    fetchByTerm(term, page).then(res => {
      let totalPages = res.total_pages;
      let images = res.results.map(img=> {
        let imageUrl = img.urls.small;
        let id = img.id;
        return { id, imageUrl, page, totalPages }
      })
      let searchCache = this.state.searchCache;
      searchCache[term] = {};
      searchCache[term][page] = images;
      this.setState({images, page, searchCache})
    });
  }
  render() {
    return(
      <Gallery
        images={this.state.images}
        fetchPrev={term=> this.fetchPrev(term)}
        fetchNext={term=> this.fetchNext(term)}
        performSearch={(term, page)=> this.performSearch(term, page)}
      />
    )
  }
}

export default GalleryContainer;