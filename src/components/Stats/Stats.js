import React from 'react';
import {Term, Origin, Highlight, Container, TotalPages} from './Stats.style';

const Stats = ({ stats }) => {
  const { term, page, isCached, totalPages} = stats;
  let msg = isCached ? 'cache' : 'api'
  let component = <Highlight>{msg}</Highlight>;
  return(
    <Container isHidden={totalPages === 0}>
      <Term>{term}</Term>
      <TotalPages>page {page} of {totalPages} / {component} fetch</TotalPages>
    </Container>
  )
}

export default Stats;
