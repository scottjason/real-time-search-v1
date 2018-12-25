import React from 'react';
import {Term, Container, TotalPages} from './Stats.style';

const Stats = ({ stats }) => {
  const { term, page, totalPages} = stats;
  return(
    <Container isHidden={totalPages === 0}>
      <Term>{term}</Term>
        <TotalPages>page {page} of {totalPages}</TotalPages>
    </Container>
  )
}

export default Stats;
