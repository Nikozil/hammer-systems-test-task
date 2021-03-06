import {
  SET_USER,
  SHOW_LOADING,
  DELETE_USER,
  SHOW_ERROR_MESSAGE,
  CLOSE_ERROR_MESSAGE,
  CHANGE_USER,
} from '../constants/Users';

const initState = {
  users: [],
  loading: false,
  message: '',
  showMessage: false,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        loading: false,
        users: [...action.payload],
      };
    }
    case CHANGE_USER: {
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === id ? action.payload : user
        ),
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        message: action.message,
        showMessage: true,
      };
    case CLOSE_ERROR_MESSAGE:
      return {
        ...state,
        message: '',
        showMessage: false,
      };

    default:
      return state;
  }
};

export default users;
