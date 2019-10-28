import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// Os estilos de SignIn e SignUp sao os mesmos, ficam na _layout > auth

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <Input
          type="password"
          name="password"
          id="pass"
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
