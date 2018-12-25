import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import {fetchByTerm} from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      images: [],
      searchCache: {},
      totalPages: 0,
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
  getImagesFromCache(term, page) {
    return this.state.searchCache[term][page];
  }
  getPaginationOptsFromCache(term) {
    return this.state.searchCache[term].paginationOpts;
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
    console.log('performSearch', term, page)
    term = term.toLowerCase();
    if(this.isInCache(term, page)) {
      console.log('hit cache')
      let images = this.getImagesFromCache(term, page);
      let paginationOpts = this.getPaginationOptsFromCache(term);
      this.setState({images, page, paginationOpts})
      return;
    }
    fetchByTerm(term, page).then(res => {
      let totalPages = res.total_pages;
      let images = res.results.map(img=> {
        let imageUrl = img.urls.small;
        let id = img.id;
        return { id, imageUrl, page }
      })
      let searchCache = this.state.searchCache;
      searchCache[term] = {};
      searchCache[term][page] = images;
      let left = page > 1;
      let right = page < totalPages;
      let paginationOpts = { left, right }
      searchCache[term].paginationOpts = paginationOpts;
      this.setState({images, page, searchCache, paginationOpts})
    });
  }
  render() {
    return(
      <Gallery
        images={this.state.images}
        paginationOpts={this.state.paginationOpts}
        fetchPrev={term=> this.fetchPrev(term)}
        fetchNext={term=> this.fetchNext(term)}
        performSearch={(term, page)=> this.performSearch(term, page)}
      />
    )
  }
}

export default GalleryContainer;