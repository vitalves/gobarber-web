import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard" title="Painel">
            DASHBOARD
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Vital Alves</strong>
              <Link to="/profile" title="Perfil">
                Meu perfil
              </Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="foto"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
