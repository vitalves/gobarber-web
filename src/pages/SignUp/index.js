import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// Os estilos de SignIn e SignUp sao os mesmos, ficam na _layout > auth

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
        <input type="email" name="email" id="email" placeholder="Seu email" />
        <input type="password" name="pass" id="pass" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
