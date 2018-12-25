import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 200px;
  background-color: black;
  color: white;
  font-weight: 300;
  line-height: 1.1rem;
  visibility: ${props=> props.isHidden ? 'hidden' : 'visible'};
`;

export const Term = styled.p`
  color: #00bbc4;
  font-size: .9rem;
`;

export const Summary = styled.div`
  color: white;
  font-size: .8rem;
`;

export const Highlight = styled.span`
  color: #00bbc4;
`;

export const Line = styled.div`
  width: auto;
  height: 1px;
  margin: 2px 0;
  margin-bottom: 4px;
  background-color: rgba(225, 225, 225, .3);
`;