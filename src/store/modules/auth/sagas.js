import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

// logar no sistema:
export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.warn('Nao prestador');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

// sempre que ouvir '@auth/SIGN_IN_REQUEST' chama a funcao signIn:
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
