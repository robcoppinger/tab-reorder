import {all, put, takeLatest} from 'redux-saga/effects';
import {actions} from '../modules/accounts';

function* onCreateEmailRequest(action) {
  const {email} = action.payload;

  try {
    // @TODO: try auth here online
    yield put(actions.createEmailSuccess({email}));
  } catch (error) {
    const errorStatusCode =
      error && error.response && error.response.status
        ? error.response.status
        : null; // to check various error codes and respond accordingly
    //dispatch error
  }
}

function* onCreateEmailSuccess(action) {
  const {email} = action.payload;
  yield put(actions.createEmail({email}));
}

export function* accountsSaga() {
  yield all([
    takeLatest('CREATE_EMAIL_REQUEST', onCreateEmailRequest),
    takeLatest('CREATE_EMAIL_SUCCESS', onCreateEmailSuccess),
  ]);
}
