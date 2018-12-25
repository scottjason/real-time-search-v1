import styled from 'styled-components';
import media from 'styled-media-query';

export const Input = styled.input`
  width: 600px;
  height: 50px;
  background-color: white;
  outline: none;
  border: 1px solid rgba(0, 0, 0, .2);
  padding: 10px 15px;
  font-size: 1.4rem;
  color: #023044;
  font-weight: 400;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 95%;
    height: 30px;
    margin: 0 auto;
  `}
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const PrevPage = styled.div`
  margin-top: 20px;
  margin-right: 25px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const NextPage = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
