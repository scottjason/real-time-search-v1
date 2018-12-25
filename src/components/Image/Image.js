import React from 'react';
import {Img} from './Image.style';

const Image = ({ item }) => {
  return(
    <Img imageUrl={item.imageUrl} />
  )
}

export default Image;