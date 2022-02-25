import { getUsersAPI } from 'api/Users';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setUsers, showError, showLoading } from '../actions/Users';
import { USERS_FETCHING } from '../constants/Users';

export function* getUsers() {
  yield takeEvery(USERS_FETCHING, function* () {
    try {
      yield put(showLoading());

      const users = yield call(getUsersAPI);

      if (users.length) {
        yield put(setUsers(users));
      }
    } catch (err) {
      yield put(showError(err.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getUsers)]);
}
