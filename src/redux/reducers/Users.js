import {
  SET_USER,
  SHOW_LOADING,
  DELETE_USER,
  SHOW_ERROR,
  CLOSE_ERROR,
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
      console.log(action.payload);
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
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
    case SHOW_ERROR:
      return {
        ...state,
        message: action.message,
        showMessage: true,
      };
    case CLOSE_ERROR:
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
