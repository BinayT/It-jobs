import { useReducer, useEffect } from 'react';
import axios from 'axios';

import { actionTypes } from '../context/actionTypes';
import { reducer } from '../context/reducer';

const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `${cors_anywhere}https://jobs.github.com/positions.json`;

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: actionTypes.MAKE_REQUEST });

    try {
      async function fetchAPI() {
        const { data } = await axios.get(BASE_URL, {
          cancelToken: cancelToken.token,
          params: { markdown: true, page: page, ...params },
        });
        dispatch({ type: actionTypes.GET_DATA, payload: { jobs: data } });
      }
      fetchAPI();
    } catch (error) {
      if (axios.isCancel(error)) return;
      dispatch({ type: actionTypes.ERROR, payload: error.message });
    }

    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);
  return state;
};

export default useFetchJobs;
