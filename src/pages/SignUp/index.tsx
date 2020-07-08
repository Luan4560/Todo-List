import React from 'react';
import { Form } from '@unform/web';
import {FiLogIn} from 'react-icons/fi'

import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './style'

const SignUp = () => {
  return (
    <Container>
      <img src={logoImg} alt=""/>

      <hr/>

    <Form onSubmit={()=>{}}>
  
      <label>Nome</label>
      <Input type="text" name="nome"/>

      <label>Email</label>
      <Input type="email" name="email"/>

      <label>Senha</label>
      <Input type="password" name="senha"/>

      <Button>REGISTRAR</Button>

    </Form>

  <hr/>

      <a href="/signup">
        <FiLogIn size={25}/>
        Criar conta
      </a>
  </Container>
      
    
  )
}

export default SignUp;