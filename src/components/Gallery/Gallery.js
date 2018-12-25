import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search';
import { Grid, Container } from './Gallery.style';

const Gallery = props => {
  return(
    <Container>
      <Search performSearch={props.performSearch} />
      <Grid>
        {props.images.map((item, i)=> {
          return(
            <Image
              key={i}
              item={item}
            />
          )
        })}
      </Grid>
    </Container>
  )
}


export default Gallery;
