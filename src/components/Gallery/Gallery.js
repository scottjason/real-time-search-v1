import React from 'react';
import Image from '../Image/Image';
import Search from '../Search/Search';
import { Grid, GridWrap, Navbar, NoResults, Container } from './Gallery.style';

const Gallery = props => {
  const getMsg = () => {
    return props.isRequesting ? 'Loading...' : 'No Results';
  }
  return(
    <Container>
      <Navbar>
        <Search
          isRequesting={props.isRequesting}
          stats={props.stats}
          fetchPrev={props.fetchPrev}
          fetchNext={props.fetchNext}
          performSearch={props.performSearch}
          paginationOpts={props.paginationOpts}
        />
      </Navbar>
      
      {!props.isRequesting &&
        <GridWrap>
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
        </GridWrap>
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
