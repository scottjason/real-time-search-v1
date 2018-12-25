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
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

export const TotalPages = styled.p`
  font-size: .8rem;
  color: white;
`;

export const Origin = styled.div`
  color: white;
  font-size: .8rem;
`
export const Highlight = styled.span`
  color: #00bbc4;
`