import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container, Teste } from './styles';

export default function Profile() {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    document.title = 'GoBarber | Meu Perfil';
  }, []);

  function handleSubmit(data) {
    // console.tron.log(data);
    dispatch(updateProfileRequest(data));
    setIsHidden(true);
  }

  function handleIsHidden() {
    setIsHidden(!isHidden);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input type="text" name="name" id="name" placeholder="Nome completo" />
        <Input type="email" name="email" id="email" placeholder="Seu email" />
        <hr />

        <p>
          Alterar a senha:
          <input
            type="checkbox"
            name="Update Password"
            checked={!isHidden}
            onChange={handleIsHidden}
          />
        </p>

        <hr />

        <Teste isHidden={isHidden}>
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
        </Teste>

        <button type="submit"> Atualizar perfil </button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
