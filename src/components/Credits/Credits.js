import React from 'react';
import {Container, Copy, Line, Highlight} from './Credits.style';

const Credits = props => {
  return(
    <Container>
      <Highlight
        target={'_blank'}
        href={'https://github.com/scottjason/react-es6-grid'}
      >
        source code
      </Highlight>
    </Container>
  )
}

export default Credits;