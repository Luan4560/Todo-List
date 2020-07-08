import React from 'react';
import { Form } from '@unform/web'
import logoImg from '../../assets/Logo.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';
import {FiLogIn, FiChevronRight} from 'react-icons/fi'
// import { Link, BrowserRouter} from 'react-router-dom'
import { Container } from './style';

const SignIn = () => {
  return (
    <Container>
      <img src={logoImg} alt=""/>
     <hr/>

     <Form onSubmit={() => {}}>
     
       <label>Email</label>
       <Input type="email" name="email" />

       <label>Senha</label>
       <Input type="password" name="senha" />

       <Button type="submit">Acessar <FiChevronRight size={20} /></Button>

     </Form>

     <hr className="line"/>

     <a href="/signup">
      <FiLogIn size={25}/>
       Criar conta
     </a>
    </Container>
        
  )
}

export default SignIn;