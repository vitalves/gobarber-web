import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

/*
<AuthLayout>
  <Outros> <~ Childrens do component
<AuthLayout>
*/

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

/*
AuthLayout <~ PropTypes.func
<AuthLayout /> <~ PropTypes.element, ~> (Childrens) // chama a funcao
*/

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
