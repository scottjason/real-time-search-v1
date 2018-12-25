import React from 'react';
import {Term, Origin, Highlight, Container, TotalPages} from './Stats.style';

const Stats = ({ stats, isRequesting }) => {
  const {term, page, reqDuration, isCached, totalPages} = stats;
  let type = isCached ? 'cache ' : 'api ';
  let duration = `${reqDuration}ms`;
  type = <Highlight>{type}</Highlight>;
  duration = <Highlight>{duration}</Highlight>;
  let msg = `${type} fetch took ${reqDuration}ms`;
  let component = <Highlight>{duration}</Highlight>;
  return(
    <Container isHidden={totalPages === 0}>
      {!isRequesting &&
        <React.Fragment>
          <Term>{term}</Term>
          <Origin>page {page} of {totalPages}</Origin>
          <TotalPages>
            <Highlight>{type}</Highlight>fetch <Highlight>{duration}</Highlight>
          </TotalPages>
        </React.Fragment>        
      }
      {isRequesting && 
        <TotalPages>loading...</TotalPages>
      }
    </Container>
  )
}

export default Stats;
