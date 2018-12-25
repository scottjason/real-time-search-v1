import React from 'react';
import {Line, Term, Summary, Highlight, Container} from './Stats.style';

const Stats = ({ stats, isRequesting }) => {
  const {term, page, reqDuration, isCached, totalPages} = stats;
  let type = isCached ? 'cache ' : 'api ';
  let duration = `${reqDuration}ms`;
  return(
    <Container isHidden={totalPages === 0}>
      {!isRequesting &&
        <React.Fragment>
          <Term>{term}</Term>
          <Line></Line>
          <Summary>page <Highlight>{page}</Highlight> of {totalPages}
            <Highlight> {type}</Highlight>fetch <Highlight>{duration}</Highlight>
          </Summary>
        </React.Fragment>
      }
      {isRequesting && 
        <Summary>loading...</Summary>
      }
    </Container>
  )
}

export default Stats;
