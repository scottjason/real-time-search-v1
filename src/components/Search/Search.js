import React from 'react';
import {Input, Form} from './Search.style';

const Search = ({ performSearch }) => {
  let inputRef = React.createRef();
  const onSubmit = e => {
    e && e.preventDefault();
    performSearch(inputRef.current.value)
  }
  return(
    <Form onSubmit={onSubmit}>
      <Input
        placeholder={'Search images...'}
        ref={inputRef}
      />
    </Form>
  )
}

export default Search;