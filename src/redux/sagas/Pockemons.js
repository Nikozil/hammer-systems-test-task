import { getPockemonAPI } from 'api/Pockemons';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setPockemons, showError, showLoading } from 'redux/actions/Pockemons';
import { POCKEMONS_FETCHING } from 'redux/constants/Pockemons';

export function* getPockemons() {
  yield takeEvery(POCKEMONS_FETCHING, function* () {
    try {
      yield put(showLoading());

      let pockemons = [];
      // const start = Math.floor(Math.random() * 90);
      const start = 10;
      for (let i = start; i < start + 8; i++) {
        const pockemon = yield call(getPockemonAPI, i);
        pockemons.push(pockemon);
      }

      if (pockemons.length) {
        yield put(setPockemons(pockemons));
      }
    } catch (err) {
      yield put(showError(err.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getPockemons)]);
}
