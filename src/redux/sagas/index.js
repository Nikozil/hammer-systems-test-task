import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Users from './Users';
import Pockemons from './Pockemons';

export default function* rootSaga(getState) {
  yield all([Auth(), Users(), Pockemons()]);
}
