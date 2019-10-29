import React from 'react';
// redux:
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

// Os estilos de SignIn e SignUp sao os mesmos, ficam na _layout > auth

// schema de validação do Yup:
const schema = Yup.object().shape({
  email: Yup.string()
    .email('O email informado é inválido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'Sua senha tem no mínimo 6 caracteres')
    .max(20, 'Sua senha tem no máximo 20 caracteres')
    .required('Digite sua senha para acessar'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    // console.tron.log(data);
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
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
