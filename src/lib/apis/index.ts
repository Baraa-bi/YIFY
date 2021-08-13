import Axios from 'axios';
import {CONSTANTS} from '../../config';
export const request = Axios.create({
  baseURL: CONSTANTS.API_BASE_URL,
  headers: {
    pragma: 'no-cache',
    Accept: 'application/json',
  },
});
