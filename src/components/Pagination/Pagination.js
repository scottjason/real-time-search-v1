import React from 'react';
import {PrevPage, NextPage} from './Pagination.style';
import { AngleLeft, AngleRight } from 'styled-icons/fa-solid';

const Pagination = ({ fetchPrev, fetchNext }) => {
  return(
    <React.Fragment>
      {fetchPrev &&
        <PrevPage onClick={()=> fetchPrev()} >
          <AngleLeft />
        </PrevPage>
      }
      {!fetchPrev &&
        <NextPage onClick={()=> fetchNext()} >
          <AngleRight />
        </NextPage>
      }
    </React.Fragment>    
  )
}

export default Pagination;
