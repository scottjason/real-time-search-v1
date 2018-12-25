import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search';
import { Grid, Container } from './Gallery.style';

const Gallery = props => {
  return(
    <Container>
      <Search
        fetchPrev={props.fetchPrev}
        fetchNext={props.fetchNext}
        performSearch={props.performSearch}
      />
      <Grid>
        {props.images.map((item, i)=> {
          return(
            <Image
              key={item.id}
              item={item}
            />
          )
        })}
      </Grid>
    </Container>
  )
}


export default Gallery;
