import { actionTypes } from './actionTypes';

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case actionTypes.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case actionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
}
