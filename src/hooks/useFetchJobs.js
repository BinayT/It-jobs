import axios from 'axios';
import { useReducer } from 'react';

import { initialState } from '../context/initialState';
import { actionTypes } from '../context/actionTypes';
import reducer from '../context/reducer';

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState);
};

export default useFetchJobs;
