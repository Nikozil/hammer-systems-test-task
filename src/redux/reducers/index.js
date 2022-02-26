import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Users from './Users';
import Pockemons from './Pockemons';

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  users: Users,
  pockemons: Pockemons,
});

export default reducers;
