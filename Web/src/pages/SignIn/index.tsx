import React, { useCallback, useRef, useEffect } from 'react';


import logoImg from '../../assets/Logo.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';
// import * as Yup from 'yup';

import { Container } from './style';

import { Link } from 'react-router-dom'
// import {FormHandles} from '@unform/core';
import { Form } from '@unform/web';
import {FiLogIn, FiChevronRight} from 'react-icons/fi';


interface SignFormData {
  email: string;
  password: string;
}

const SignIn = () => {


  useEffect(() => {

  }, [])


  const handleSubmit = useCallback(() => {

    console.log('Bagaça funcionando')
  }, [])

  return (
    <Container>
      <img src={logoImg} alt="logo"/>
     <hr/>

     <Form  onSubmit={handleSubmit}>

       <label>Email</label>
       <Input type="email" name="email" />

       <label>Senha</label>
       <Input type="password" name="senha" />

       <Button  type="submit">
         Acessar
         <FiChevronRight size={20} />
        </Button>

     </Form>

     <hr className="line"/>

     <Link to="/signup">
      <FiLogIn size={25}/>
       Criar conta
     </Link>
    </Container>

  )
}

export default SignIn;
