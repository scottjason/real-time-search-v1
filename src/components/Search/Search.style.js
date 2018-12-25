import styled from 'styled-components';
import media from 'styled-media-query';
import React from 'react';

export const Input = styled.input`
  width: 600px;
  height: 50px;
  background-color: #333;
  outline: none;
  border: 1px solid rgba(0, 0, 0, .2);
  padding: 10px 55px 10px 20px;
  font-size: 1.4rem;
  color: white;
  font-weight: 300;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    height: 30px;
    margin: 0 auto;
  `}
`;

export const Form = styled.form`
  position: relative;
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 95%;
  `}
`;

export const PrevPage = styled.div`
  margin-top: 20px;
  margin-right: 25px;
  width: 15px;
  height: 15px;
  color: white;
  cursor: pointer;
`;

export const NextPage = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  width: 15px;
  height: 15px;
  color: white;
  cursor: pointer;
`;
