/** Esse componente é usado ao invés do Route do 'react-router-dom'  */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Layouts
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  // PROPRIEDADES: path, exact, component...
  component: Component, // C para usá-lo como componente
  isPrivate, // páginas que exigem login (false no defaultProps)
  ...rest // todas as demais propriedades
}) {
  const signed = false; // se o usuario esta logado

  // Se nao estiver logado e a rota for privada
  if (!signed && isPrivate) {
    // redireciona para a página de Login
    return <Redirect to="/" />;
  }

  // Se estiver logado e a rota não for privada:
  if (signed && !isPrivate) {
    // Redireciona para dentro do Dashboard
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  /* Layout pode ser chamado em formato de componente <Layout /> */

  return (
    <Route // do 'react-router-dom'
      {...rest} // Todas as propriedades recebidas
      // component={Component} // trocado apos a inclusao de Layouts
      render={props => (
        <Layout>
          <Component {...props} />
          {/* Component recebeu C maiusculo para ser usado aqui */}
          {/* Nas ...props vao as propiedades de navegação, parâmetros e tudo mais */}
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool, // nao obrigatio, exige o default abaixo
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
