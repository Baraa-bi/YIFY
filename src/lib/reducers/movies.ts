import {ACTION_TYPES} from '../../config';

const INIT_STATE = {
  moviesList: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.MOVIES_LIST_CHANGED:
      return {...state, moviesList: action.payload};
    default:
      return state;
  }
};
