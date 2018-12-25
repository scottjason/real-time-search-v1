import styled from 'styled-components';
import media from 'styled-media-query';
const hdUrl = 'https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905';

export const Img = styled.div`
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-postion: center;
  background-image: url(${props => props.imageUrl});
  border: 1px solid rgba(225, 225, 225, .4);
  transition: all ease 150ms;
  box-sizing: border-box;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    min-height: 100px;
  `}
`;
