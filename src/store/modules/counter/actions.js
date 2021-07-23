import * as types from '../types';

export function counterRequest() {
  return {
    type: types.INCREMENT_REQUEST,
  };
}

export function counterSuccess() {
  return {
    type: types.INCREMENT_SUCCESS,
  };
}

export function counterFailure() {
  return {
    type: types.INCREMENT_FAILURE,
  };
}
