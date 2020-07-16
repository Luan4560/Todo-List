import styled from 'styled-components';
import { shade } from 'polished';
import Input from '../../components/Input';
import Button from '../../components/Button';

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
  align-items: center;
  flex: 1;
  margin-top: 10px;
`;

export const InputStyled = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 46px;

`;

export const ButtonStyled = styled(Button)`
  border-radius: 0;
  height: 46px;
  margin: 0;
  width: 107px;
`;

export const ButtonStyledPlus = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 46px;
  margin: 0;
  width: 57px;
  background:  #F29202;
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 60px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #262626;
    margin-bottom: 35px;
    flex: 1;
    border-radius: 8px;

  }

  .btn-check {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: #3C3C3C;
    height: 100%;
    width: 56px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .btn-trash {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #3C3C3C;
    height: 100%;
    width: 56px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }



`;
