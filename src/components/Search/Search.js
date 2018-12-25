import React from 'react';
import {Input, Form} from './Search.style';
import debounce from 'debounce';

const Search = ({ performSearch }) => {
  
  let inputRef = React.createRef();

  const getInputVal = () => {
   return inputRef.current ? inputRef.current.value : '';
  }

  const debouncedSearch = debounce(()=> {
    performSearch(getInputVal());
  }, 200);
  
  const onSubmit = e => {
    e && e.preventDefault();
    performSearch(getInputVal());
  }

  return(
    <Form onSubmit={onSubmit}>
      <Input
        placeholder={'Search images...'}
        onChange={debouncedSearch}
        ref={inputRef}
      />
    </Form>
  )
}

export default Search;