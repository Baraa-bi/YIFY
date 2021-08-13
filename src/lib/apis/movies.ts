import {request} from './index';

export const moviesApi = {
  list: filters => {
    return request.get('v2/list_movies.json', {
      params: {
        ...filters,
      },
    });
  },
};
