import styled from 'styled-components';
import media from 'styled-media-query';

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
