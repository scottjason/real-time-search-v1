import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import GalleryContainer from './containers/GalleryContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <GalleryContainer />
      </Container>
    );
  }
}

export default App;
