import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Nao prestador');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([
  // sempre que ouvir '@auth/SIGN_IN_REQUEST' chama a funcao signIn:
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
