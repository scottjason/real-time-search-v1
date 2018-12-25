import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  width: 200px;
  background-color: black;
  color: white;
  font-weight: 300;
  line-height: 1.1rem;
  font-size: .9rem;
  text-align: right;
  margin-right: 30px;
  visibility: ${props=> props.isHidden ? 'hidden' : 'visible'};
`;

export const Copy = styled.p`
  color: white;
`;

export const Highlight = styled.a`
  color: #00bbc4;
  text-decoration: none;
`;

export const Line = styled.div`
  width: auto;
  height: 1px;
  margin: 2px 0;
  margin-bottom: 4px;
  background-color: rgba(225, 225, 225, .3);
`;
