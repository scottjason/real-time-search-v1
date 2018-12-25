import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 200px;
  height: auto;
  justify-self: flex-start;
  background-color: black;
  color: white;
  font-weight: 300;
  line-height: 1rem;
  visibility: ${props=> props.isHidden ? 'hidden' : 'visible'};
`;

export const Term = styled.p`
  color: #00bbc4;
  font-size: 1.1rem;
`;

export const TotalPages = styled.p`
  color: white;
  font-size: .8rem;
  margin-top: 3px;
  color: rgba(225, 225, 225, .9);
`;