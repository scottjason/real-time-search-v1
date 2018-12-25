import React from 'react';
import {PrevPage, NextPage} from './Pagination.style';
import { AngleLeft, AngleRight } from 'styled-icons/fa-solid';

const Pagination = ({ enabled, fetchPrev, fetchNext }) => {
  return(
    <React.Fragment>
      {fetchPrev &&
        <PrevPage enabled={enabled} onClick={()=> enabled && fetchPrev()} >
          <AngleLeft />
        </PrevPage>
      }
      {!fetchPrev &&
        <NextPage enabled={enabled} onClick={()=> enabled && fetchNext()} >
          <AngleRight />
        </NextPage>
      }
    </React.Fragment>    
  )
}

export default Pagination;
