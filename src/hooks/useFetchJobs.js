import { useReducer, useEffect } from 'react';
import axios from 'axios';

import { actionTypes } from '../context/actionTypes';
import { reducer } from '../context/reducer';

const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `${cors_anywhere}https://jobs.github.com/positions.json`;

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    dispatch({ type: actionTypes.MAKE_REQUEST });
    try {
      async function fetchAPI() {
        const { data } = await axios.get(BASE_URL, {
          params: { markdown: true, page: page, ...params },
        });
        console.log(data);
        dispatch({ type: actionTypes.GET_DATA, payload: { jobs: data } });
      }
      fetchAPI();
    } catch (error) {
      dispatch({ type: actionTypes.ERROR, payload: error.message });
    }
  }, [params, page]);
  return state;
};

export default useFetchJobs;
