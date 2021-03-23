import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { scheduleActions, FetchSchedule ,Schedule} from '../modules/schedule';
import { Action } from 'typescript-fsa';

const API_URL = 'http://localhost:8080/api';

const getSchedule = (month: string, year: string) => {
  const REQUEST_URL = `${API_URL}/schedules?month=${month}&year=${year}`;
  console.log('request', REQUEST_URL);
  return axios
    .get(REQUEST_URL)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

function* fetchSchedule(action: Action<FetchSchedule>) {
  try {
    const schedules:Schedule[] = yield call(
      getSchedule,
      action.payload.month,
      action.payload.year
    );
    yield put(scheduleActions.setScheduleItem(schedules));
  } catch (e) {
    console.log('Fetch Failed', e);
  }
}

export default function* handleScheduleActions() {
  yield takeLatest(scheduleActions.fetchScheduleItem, fetchSchedule);
}
