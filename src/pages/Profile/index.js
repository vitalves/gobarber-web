import React from 'react';
import { useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" id="name" placeholder="Nome completo" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit"> Atualizar perfil </button>
      </Form>

      <button type="button"> Sair do GoBarber </button>
    </Container>
  );
}
