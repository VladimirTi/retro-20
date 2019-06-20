import createReducer from './createReducer.js';
import { CHANGE_RADIUS } from './action.js';

const initialState = {
  range: null
};

const actionsMap = {
  [CHANGE_RADIUS]: (state, action) => {
    return {
      ...state,
      range: action.payload
    };
  }
};

export const reducer = createReducer(actionsMap, initialState)
