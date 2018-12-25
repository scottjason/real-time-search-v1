import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import {fetchByTerm} from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      images: [],
      renderedTerm: 'nature',
      searchCache: {},
      totalPages: 0,
      isCached: false,
    };
  }
  
  _isRequesting = true;
  
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
  fetchPrev = term => {
    let page = this.state.page - 1;
    this.performSearch(term, page);
  }
  fetchNext = term => {
    let page = this.state.page + 1;
    this.performSearch(term, page);
  }
  getStats(){
    return {
      page: this.state.page,
      term: this.state.renderedTerm,
      isCached: this.state.isCached,
      totalPages: this.state.totalPages,
      reqDuration: this.state.reqDuration,
    }
  }
  performSearch = (term, page) => {
    this._isRequesting = true;
    let start = Date.now();
    if (!term) {
      let images = [];
      let renderedTerm = '';
      let paginationOpts = {};
      let page = 1;
      let totalPages = 0;
      let end = Date.now();
      let reqDuration = end - start;
      this._isRequesting = false;
      this.setState({images, reqDuration, paginationOpts, page, totalPages, renderedTerm})
      return;
    }
    
    let renderedTerm = term;
    term = term.toLowerCase();
    if(this.isInCache(term, page)) {
      let images = this.state.searchCache[term][page];
      let paginationOpts = this.state.searchCache[term].paginationOpts;
      let totalPages = this.state.searchCache[term].totalPages;
      let isCached = true;
      let end = Date.now();
      let reqDuration = end - start;
      this._isRequesting = false;
      this.setState({isCached, reqDuration, images, renderedTerm, page, totalPages, paginationOpts})
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
      searchCache[term].totalPages = totalPages;
      searchCache[term].paginationOpts = paginationOpts;
      let isCached = false;
      let end = Date.now();
      let reqDuration = end - start;
      this._isRequesting = false;
      this.setState({isCached, reqDuration, images, page, renderedTerm, searchCache, totalPages, paginationOpts})
    });
  }
  render() {
    return(
      <Gallery
        isRequesting={this._isRequesting}
        stats={this.getStats()}
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