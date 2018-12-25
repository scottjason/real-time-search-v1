import styled from 'styled-components';

export const PrevPage = styled.div`
  margin-top: 20px;
  margin-right: 25px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  color: ${props=> props.enabled ? 'white' : 'grey'};
`;

export const NextPage = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  color: ${props=> props.enabled ? 'white' : 'grey'};
`;