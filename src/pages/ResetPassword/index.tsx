import React from 'react'

import { Form } from '@unform/web';
import {Container} from './style'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../assets/Logo.svg'

const ResetPassword = () => {
  return (
   <>
   <Container>
     <div className="main-content">
      <img src={Logo} alt="Imagem logo" />
 
    <hr/>
      <h2>Recuperar Senha</h2>
    <hr/>
     </div>


  <Form className="form-content" onSubmit={() => {}}>
    <label>E-mail</label>
    <Input type="email" name="email" placeholder="Digite seu email"/>
    
    <Button className="btn">
      <Link to="/" className="btn-link">
       Continuar
      </Link>
    </Button>

  </Form>


  </Container>
</>
)
}

export default ResetPassword;