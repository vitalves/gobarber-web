import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
// importa os demais sagas de cada module

export default function* rootSaga() {
  return yield all([auth]); // demais Sagas
}
