import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

// Os estilos de SignIn e SignUp sao os mesmos, ficam na _layout > auth

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Digite seu nome corretamente')
    .required('Digite seu nome'),
  email: Yup.string()
    .trim()
    .email('Email inválido')
    .required('Digite seu email'),
  password: Yup.string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
    .max(20, 'Sua senha deve ter no máximo 20 caracteres')
    .required('Crie sua senha de acesso'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'GoBarber | Criar conta';
  }, []);

  function handleSubmit({ name, email, password }) {
    // console.tron.log(data);
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
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
