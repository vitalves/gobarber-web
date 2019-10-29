import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify'; // notificações

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

// logar no sistema:
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      // console.tron.warn('Nao prestador');
      toast.error('Esse usuário não é um prestador de serviços', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados!', {
      position: 'top-center',
      autoClose: 3000,
      width: '500px',
    });

    yield put(signFailure());
  }
}

// sempre que ouvir '@auth/SIGN_IN_REQUEST' chama a funcao signIn:
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
