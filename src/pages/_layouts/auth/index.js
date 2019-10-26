import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

/*
<AuthLayout>
  <Outros> <~ Childrens do component
<AuthLayout>
*/

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

/*
AuthLayout <~ PropTypes.func
<AuthLayout /> <~ PropTypes.element, ~> (Childrens) // chama a funcao
*/

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
