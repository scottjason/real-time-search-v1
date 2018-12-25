import React from 'react';
import {Img} from './Image.style';
import LazyLoad from 'react-lazyload';

const Image = ({ item }) => {
  return(
    <LazyLoad height={300}>
      <Img imageUrl={item.imageUrl} />
    </LazyLoad>
  )
}

export default Image;
