import React from 'react';

import { Form } from '@unform/web';
import {FiLogOut, FiPlus,FiCheck, FiTrash2} from 'react-icons/fi'

import logoImg from '../../assets/Logo.svg';

import {Container,
  HeaderContainer,
  ContentName,
  WrapForm,
  InputStyled,
  ButtonStyled,
  ButtonStyledPlus,
  ListContainer

} from './style';

const TodoPage = () => {
  return (
    <Container>
      <HeaderContainer>
        <img src={logoImg} alt="logo" />

        <ContentName>
          <div>
            <h2>Luan Nascimento</h2>
            <p>luan.nascimento11@outlook.com</p>
          </div>
          <a href="#">
            <FiLogOut size={30} />
          </a>
          <div></div>
        </ContentName>
      </HeaderContainer>
      <hr />
      <Form onSubmit={() => {}}>
        <WrapForm>
          <InputStyled
            type="text"
            name="title"
            placeholder="Digite uma nova tarefa"
          />
          <ButtonStyled>Adicionar</ButtonStyled>
          <ButtonStyledPlus>
            <FiPlus size={25} />
          </ButtonStyledPlus>
        </WrapForm>
      </Form>

      <ListContainer>
        <li>
          <div className="btn-check">
            <FiCheck color="#29CB00" size={25} />
          </div>
          <p>
            Title one, Title one, Title one, Title one, Title one, Title one,
          </p>
          <div className="btn-trash">
            <FiTrash2 />
          </div>
        </li>

        <li>
          <div className="btn-check">
            <FiCheck color="#29CB00" size={25} />
          </div>
          <div className="title">
            <p>
              Title one, Title one, Title one, Title one, Title one, Title one,
            </p>
          </div>
          <div className="btn-trash">
            <FiTrash2 />
          </div>
        </li>

        <li>
          <div className="btn-check">
            <FiCheck color="#29CB00" size={25} />
          </div>
          <div className="title">
            <p>
              Title one, Title one, Title one, Title one, Title one, Title one,
            </p>
          </div>
          <div className="btn-trash">
            <FiTrash2 />
          </div>
        </li>

        <li>
          <div className="btn-check">
            <FiCheck color="#29CB00" size={25} />
          </div>
          <div className="title">
            <p>
              Title one, Title one, Title one, Title one, Title one, Title one,
            </p>
          </div>
          <div className="btn-trash">
            <FiTrash2 />
          </div>
        </li>

      </ListContainer>
    </Container>
  );
}

export default TodoPage;
