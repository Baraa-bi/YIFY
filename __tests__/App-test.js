import thunk from 'redux-thunk';
import {ACTION_TYPES} from '../src/config';
import configureMockStore from 'redux-mock-store';
import {deleteMovie} from '../src/lib/actions/movies';

const middle_wares = [thunk];
const mockStore = configureMockStore(middle_wares);
const store = mockStore(INIT_STATE);

const INIT_STATE = {
  movies: {
    moviesList: {
      1: {
        id: 1,
        title: 'TWILIGHT',
      },
      4: {
        id: 4,
        title: 'VENOM',
      },
    },
  },
};

test('Should delete the movie with id 4 from the movie list', () => {
  store.dispatch(deleteMovie(4));
  const actualAction = store.getActions();
  expect(actualAction).toEqual([
    {
      type: ACTION_TYPES.MOVIES_LIST_CHANGED,
      payload: {
        1: {
          id: 1,
          title: 'TWILIGHT',
        },
      },
    },
  ]);
});
