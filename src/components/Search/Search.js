import React from 'react';
import {Input, Form, NextPage, PrevPage} from './Search.style';
import { AngleLeft, AngleRight } from 'styled-icons/fa-solid';
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
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <PrevPage>
          <AngleLeft />
        </PrevPage>
        <Input
          placeholder={'Search images...'}
          onChange={debouncedSearch}
          ref={inputRef}
        />
      <NextPage>
        <AngleRight />
      </NextPage>
      </Form>

    </React.Fragment>
  )
}

export default Search;