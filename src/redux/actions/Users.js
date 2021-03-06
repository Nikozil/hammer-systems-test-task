import {
  SET_USER,
  SHOW_LOADING,
  DELETE_USER,
  SHOW_ERROR_MESSAGE,
  USERS_FETCHING,
  CLOSE_ERROR_MESSAGE,
  CHANGE_USER,
} from '../constants/Users';

export const setUsers = (users) => {
  return {
    type: SET_USER,
    payload: users,
  };
};
export const changeUser = (user) => {
  return {
    type: CHANGE_USER,
    payload: user,
  };
};
export const fetchingUsers = () => {
  return {
    type: USERS_FETCHING,
  };
};
export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
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
