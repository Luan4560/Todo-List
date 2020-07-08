import styled from 'styled-components';
import { shade } from 'polished';
import Input from '../../components/Input'

export const Container = styled.div`
  height: 100vh;
  max-width: 1920px;
  max-width: 90%;
  margin:0 auto;

  hr {
    border: 1px solid #323232;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  
`;

export const ContentName = styled.div`
    display: flex;
    align-items: center;
    max-width: 1920px;

    p{
      color: #606060;
    }
  
  a {
   color: #FE9E0E;
   display: flex;
   align-items: center;
   text-decoration: none;
   
   svg {
    margin-left: 15px;
   }

   &:hover {
    color: ${shade(0.2, '#FE9E0E')}
  }  
} 
`;

export const WrapForm = styled.div`

  display: flex;
  flex: 1;

`;