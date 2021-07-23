import * as types from '../types';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_SUCCESS: {
      const newState = { ...state };
      newState.counter += 1;
      return newState;
    }
    case types.INCREMENT_REQUEST: {
      console.log('requested');
      return state;
    }
    case types.INCREMENT_FAILURE: {
      console.log('error');
      return state;
    }
    default: {
      return state;
    }
  }
};
