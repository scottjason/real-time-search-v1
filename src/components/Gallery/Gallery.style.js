import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
`;

export const Grid = styled.div`
  position: relative;
  margin: 15px auto 0 auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 10px;
`;

export const NoResults = styled.div`
  color: #00bbc4;
  margin-top: 5px;
  font-size: 1.2rem;
  text-align: center;
`;
