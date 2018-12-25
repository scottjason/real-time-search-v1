import React from 'react';
import {Input, Form} from './Search.style';
import Pagination from '../Pagination/Pagination';
import debounce from 'debounce';

const Search = props => {

  let inputRef = React.createRef();
  
  const getInputVal = () => {
    return inputRef.current ? inputRef.current.value : '';
  }

  const debouncedSearch = debounce(()=> {
    props.performSearch(getInputVal(), 1);
  }, 200);
  
  const onSubmit = e => {
    e && e.preventDefault();
    props.performSearch(getInputVal(), 1);
  }

  const fetchPrev = () => props.fetchPrev(getInputVal());
  const fetchNext = () => props.fetchNext(getInputVal());

  return(
    <Form onSubmit={onSubmit}>
      <Pagination
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
        term={getInputVal()}
        fetchNext={fetchNext}
      />
    </Form>
  )
}

export default Search;