import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  background-color: black;
  z-index: 1;
`;
export const GridWrap = styled.div`
   position: relative;
   padding: 30px;
   width: auto;
   height: auto;
`;

export const Grid = styled.div`
  margin: 120px auto 0 auto;
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

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  padding-top: 60px;
  padding-bottom: 15px;
  background-color: black;
  z-index: 2;
`;