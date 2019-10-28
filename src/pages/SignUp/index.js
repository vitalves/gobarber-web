import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// Os estilos de SignIn e SignUp sao os mesmos, ficam na _layout > auth

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" id="nome" placeholder="Nome Completo" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Sua senha"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
