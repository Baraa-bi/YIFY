import {ACTION_TYPES} from '../../config';
import {moviesApi} from '../apis/movies';
import _ from 'lodash';

interface FILTERS {
  limit: number;
}

export const getMoviesList = (filters?: FILTERS) => {
  return dispatch => {
    return moviesApi.list(filters).then((response: any) => {
      const movies = {};
      // manipulate movie object 
      _.map(response.movies, movie => {
        return (movies[`_${movie.id}`] = {
          id: `_${movie.id}`,
          image: movie.medium_cover_image,
          title: movie.title,
          summary: movie.summary,
        });
      });
      dispatch({
        type: ACTION_TYPES.MOVIES_LIST_CHANGED,
        payload: movies,
      });
    });
  };
};

export const shuffleMovies = () => {
  // shuffle movies
  return (dispatch, getState) => {
    const movies = {...getState().movies.moviesList};
    const newMovies = {};
    _.map(_.shuffle(Object.keys(movies)), movieId => {
      newMovies[movieId] = movies[movieId];
    });
    return dispatch({
      type: ACTION_TYPES.MOVIES_LIST_CHANGED,
      payload: newMovies,
    });
  };
};

export const deleteMovie = movieId => {
  // deleting movie by id
  return (dispatch, getState) => {
    const movies = {...getState().movies.moviesList};
    delete movies[movieId];
    return dispatch({
      type: ACTION_TYPES.MOVIES_LIST_CHANGED,
      payload: movies,
    });
  };
};
