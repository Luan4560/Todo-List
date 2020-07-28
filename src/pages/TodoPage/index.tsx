import React from 'react';

import { Form } from '@unform/web';
import {FiLogOut, FiPlus, FiCheck,FiTrash2} from 'react-icons/fi'

import logoImg from '../../assets/Logo.svg';
import  Input  from '../../components/Input';
import  Button from '../../components/Button';

import {Container, 
  HeaderContainer, 
  ContentName, 
  WrapForm, 
  InputStyled, 
  ButtonStyled,
  ButtonStyledPlus,
  Card,
  TextContent

} from './style';

const TodoPage = () => {
  return (
    <Container>
      <HeaderContainer>
        <img src={logoImg} alt="logo"/>

        <ContentName>
          <div>
          <h2>Luan Nascimento</h2>
          <p>luan.nascimento11@outlook.com</p>
           
          </div>
          <a href="#">
            <FiLogOut size={30}/>
          </a>
          <div>

          </div>
        </ContentName>
         
      </HeaderContainer>
        <hr/>
        <Form onSubmit={() => {}}>

        <WrapForm>
          <InputStyled type="text" name="title" placeholder="Digite uma nova tarefa"/>
          <ButtonStyled>Adicionar</ButtonStyled>
          <ButtonStyledPlus><FiPlus size={25}/></ButtonStyledPlus>
        </WrapForm>

        </Form>


        <Card>
          <button type="button">
            <FiCheck size={22} color="#29cb00"/>
          </button>

          <TextContent>
            <p>Title one,Title one,Title one,Title one,Title one,</p>
          </TextContent>
          <button type="button">
            <FiTrash2 size={22} color="#999"/>
          </button>
        </Card>

        <Card>
          <button type="button">
            <FiCheck size={22} color="#29cb00"/>
          </button>

          <TextContent>
            <p>Title one,Title one,Title one,Title one,Title one,</p>
          </TextContent>
          <button type="button">
            <FiTrash2 size={22} color="#999"/>
          </button>
        </Card>

        <Card>
          <button type="button">
            <FiCheck size={22} color="#29cb00"/>
          </button>

          <TextContent>
            <p>Title one,Title one,Title one,Title one,Title one,</p>
          </TextContent>
          <button type="button">
            <FiTrash2 size={22} color="#999"/>
          </button>
        </Card>

        <Card>
          <button type="button">
            <FiCheck size={22} color="#29cb00"/>
          </button>

          <TextContent>
            <p>Title one,Title one,Title one,Title one,Title one,</p>
          </TextContent>
          <button type="button">
            <FiTrash2 size={22} color="#999"/>
          </button>
        </Card>
  
    </Container>      
  )
}

export default TodoPage;