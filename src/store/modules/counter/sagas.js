import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

function* counterRequest() {
  try {
    yield call(request);
    yield put(actions.counterSuccess());
    toast.success('Success', {
      toastId: 'RandomId',
    });
  } catch {
    yield put(actions.counterFailure());
  }
}

export default all([
  takeLatest(types.INCREMENT_REQUEST, counterRequest),
]);
