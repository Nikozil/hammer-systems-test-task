import {
  SET_POCKEMONS,
  CHANGE_POCKEMONS_COORDS,
  SHOW_LOADING,
  SHOW_ERROR_MESSAGE,
  CLOSE_ERROR_MESSAGE,
} from '../constants/Pockemons';

const initState = {
  pockemons: [],
  loading: false,
  message: '',
  showMessage: false,
};

const pockemons = (state = initState, action) => {
  switch (action.type) {
    case SET_POCKEMONS: {
      return {
        ...state,
        loading: false,
        pockemons: [...action.payload],
      };
    }
    case CHANGE_POCKEMONS_COORDS: {
      const { id, coords } = action.payload;
      return {
        ...state,
        pockemons: state.pockemons.map((pockemon) =>
          pockemon.id === id ? { ...pockemon, coords } : pockemon
        ),
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

export default pockemons;
