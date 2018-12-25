import React from 'react';
import {Input, Form, Container} from './Search.style';
import Pagination from '../Pagination/Pagination';
import Stats from '../Stats/Stats';
import debounce from 'debounce';

const Search = props => {

  let inputRef = React.createRef();
  
  const getInputVal = () => {
    return inputRef.current ? inputRef.current.value : '';
  }

  const debouncedSearch = debounce(()=> {
    props.performSearch(getInputVal(), 1);
  }, 100);
  
  const onSubmit = e => {
    e && e.preventDefault();
    props.performSearch(getInputVal(), 1);
  }

  const fetchPrev = () => props.fetchPrev(getInputVal());
  const fetchNext = () => props.fetchNext(getInputVal());
  
  const enablePrev = props.paginationOpts && props.paginationOpts.left;
  const enableNext = props.paginationOpts && props.paginationOpts.right;

  return(
    <Container>
      <Stats stats={props.stats} />
      <Form onSubmit={onSubmit}>
        <Pagination
          enabled={enablePrev}
          term={getInputVal()}
          fetchPrev={fetchPrev}
        />
        <Input
          autoFocus={true}
          placeholder={'Search images...'}
          defaultValue={'nature'}
          onChange={debouncedSearch}
          ref={inputRef}
        />
        <Pagination
          enabled={enableNext}
          term={getInputVal()}
          fetchNext={fetchNext}
        />
      </Form>
    </Container>
  )
}

export default Search;