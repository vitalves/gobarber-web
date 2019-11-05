import React from 'react';
import { ToastContainer } from 'react-toastify'; // notificacoes toast
import { PersistGate } from 'redux-persist/integration/react'; // persist
import { Provider } from 'react-redux'; // redux

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

// store do Redux (após as configs do Reactotron)
// import store from './store'; // antes do persist
import { store, persistor } from './store'; // com o persist

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={2000} position="top-center" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
