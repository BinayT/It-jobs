import { useReducer, useEffect } from 'react';
import axios from 'axios';

import { actionTypes } from '../context/actionTypes';
import { reducer } from '../context/reducer';

const BASE_URL = `/positions.json`;

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    const cancelToken2 = axios.CancelToken.source();
    dispatch({ type: actionTypes.MAKE_REQUEST });

    try {
      async function fetchAPI() {
        const { data } = await axios.get(BASE_URL, {
          cancelToken: cancelToken1.token,
          params: { markdown: true, page: page, ...params },
        });
        dispatch({ type: actionTypes.GET_DATA, payload: { jobs: data } });
      }
      fetchAPI();
    } catch (error) {
      if (axios.isCancel(error)) return;
      dispatch({ type: actionTypes.ERROR, payload: error.message });
    }

    try {
      async function fetchAPI() {
        const { data } = await axios.get(BASE_URL, {
          cancelToken: cancelToken2.token,
          params: { markdown: true, page: page + 1, ...params },
        });
        dispatch({
          type: actionTypes.UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: data.length !== 0 },
        });
      }
      fetchAPI();
    } catch (error) {
      if (axios.isCancel(error)) return;
      dispatch({ type: actionTypes.ERROR, payload: error.message });
    }

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);
  return state;
};

export default useFetchJobs;
