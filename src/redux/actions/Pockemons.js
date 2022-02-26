import {
  CHANGE_POCKEMONS_COORDS,
  POCKEMONS_FETCHING,
  SET_POCKEMONS,
  SHOW_LOADING,
  SHOW_ERROR_MESSAGE,
  CLOSE_ERROR_MESSAGE,
} from 'redux/constants/Pockemons';

export const setPockemons = (pockemons) => {
  return {
    type: SET_POCKEMONS,
    payload: pockemons,
  };
};
export const changePockemonsCoords = (pockemon) => {
  return {
    type: CHANGE_POCKEMONS_COORDS,
    payload: pockemon,
  };
};
export const fetchingPockemons = () => {
  return {
    type: POCKEMONS_FETCHING,
  };
};
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const showError = (message) => {
  return {
    type: SHOW_ERROR_MESSAGE,
    message,
  };
};
export const closeError = (message) => {
  return {
    type: CLOSE_ERROR_MESSAGE,
    message,
  };
};
