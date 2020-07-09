import React from 'react';
import { Form } from '@unform/web';
import { FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './style'

const SignUp = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo"/>

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

      <Link to="/todopage">
        <FiLogOut size={25}/>
        Todo Page
      </Link>
  </Container>
      
    
  )
}

export default SignUp;