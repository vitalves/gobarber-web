import React from 'react';
// import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  // const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    // console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }
  /*
  function handleIsHidden() {
    setIsHidden(!isHidden);
  } */

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" id="name" placeholder="Nome completo" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <hr />
        {/*
        <p>
          Alterar a senha:
          <input
            type="checkbox"
            name="Update Password"
            checked={!isHidden}
            onChange={handleIsHidden}
          />
        </p> <Teste isHidden={isHidden}>
        */}
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
