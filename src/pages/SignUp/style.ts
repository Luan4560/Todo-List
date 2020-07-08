import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  hr {
    width: 313px;
    border: 1px solid #323232;
    margin: 30px 0;
  }

  a {
   color: #FE9E0E;
   display: flex;
   align-items: center;
   text-decoration: none;

   &:hover {
    color: ${shade(0.2, '#FE9E0E')}
  }
}
`;