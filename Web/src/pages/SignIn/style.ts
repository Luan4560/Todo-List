import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  hr{
    width: 313px;
    border: 1px solid #323232;
    margin: 30px 0;
  }

  strong {
    margin-top: 25px;
  }

  a {
   color: #FE9E0E;
   display: flex;
   align-items: center;
   text-decoration: none;

   &:hover {
    color: ${shade(0.2, '#FE9E0E')}
  }
   

   svg {
     margin-right: 15px;
   }
  }
`;
