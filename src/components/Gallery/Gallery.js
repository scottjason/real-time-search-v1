import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search';
import { Grid, NoResults, Container } from './Gallery.style';

const Gallery = props => {
  const getMsg = () => {
    return props.isRequesting ? 'Loading...' : 'No Results';
  }
  return(
    <Container>
      <Search
        isRequesting={props.isRequesting}
        stats={props.stats}
        fetchPrev={props.fetchPrev}
        fetchNext={props.fetchNext}
        performSearch={props.performSearch}
        paginationOpts={props.paginationOpts}
      />
      {!props.isRequesting &&
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
      }
      {!props.images.length &&
        <NoResults>
          {getMsg()}
        </NoResults>
      }
    </Container>
  )
}


export default Gallery;
