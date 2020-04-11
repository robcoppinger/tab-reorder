import {all, fork} from 'redux-saga/effects';

import {accountsSaga} from './accountsSaga.js';

export function* rootSaga() {
  yield all([fork(accountsSaga)]); // can fork multiple sagas here
}
