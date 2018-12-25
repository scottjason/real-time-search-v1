import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search';
import { Grid, NoResults, Container } from './Gallery.style';

const Gallery = props => {
  return(
    <Container>
      <Search
        stats={props.stats}
        fetchPrev={props.fetchPrev}
        fetchNext={props.fetchNext}
        performSearch={props.performSearch}
        paginationOpts={props.paginationOpts}
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
      
      {!props.images.length &&
        <NoResults>
          No Results
        </NoResults>
      }
    </Container>
  )
}


export default Gallery;
