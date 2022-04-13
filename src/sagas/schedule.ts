import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  scheduleActions,
  ScheduleItem,
  DeleteSchedule,
  AddScheduleItem,
} from '../modules/schedule';
import { CalendarMonth } from '../modules/calendar';
import { Action } from 'typescript-fsa';
import { formatSchedule } from '../util/schedule';
import { AppStore } from '../modules/index';

const API_URL = 'http://localhost:8080/api';

const getSchedule = (month: number, year: number) => {
  const REQUEST_URL = `${API_URL}/schedules?month=${month}&year=${year}`;
  return axios
    .get(REQUEST_URL)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

function* fetchSchedule(action: Action<CalendarMonth>) {
  yield put(scheduleActions.setLoadingSchedule());
  try {
    const result: ScheduleItem[] = yield call(
      getSchedule,
      action.payload.month,
      action.payload.year
    );

    const formatedSchedule = result.map((r) => formatSchedule(r));
    yield put(scheduleActions.setFetchScheduleItemList(formatedSchedule));
  } catch (e: any) {
    yield put(scheduleActions.AsyncFailureSchedule(e.message));
  }
}

const addSchedule = (scheduleItem: AddScheduleItem) => {
  const REQUEST_URL = `${API_URL}/schedules`;
  return axios
    .post(REQUEST_URL, {
      ...scheduleItem,
      date: scheduleItem.date.toISOString(),
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

function* addScheduleItem(action: Action<AddScheduleItem>) {
  yield put(scheduleActions.setLoadingSchedule());
  try {
    const result: ScheduleItem = yield call(addSchedule, action.payload);
    const newSchedule = formatSchedule(result);

    yield put(scheduleActions.setScheduleItem(newSchedule));
  } catch (e: any) {
    yield put(scheduleActions.AsyncFailureSchedule(e.message));
  }
}
const deleteSchedule = (id: DeleteSchedule) => {
  const REQUEST_URL = `${API_URL}/schedules/${id}`;
  return axios
    .delete(REQUEST_URL)
    .then((res) => {
      console.log('delete response', res);
      return res.status;
    })
    .catch((err) => {
      return err;
    });
};

function* deleteScheduleItem(action: Action<DeleteSchedule>) {
  yield put(scheduleActions.setLoadingSchedule());
  const selector = (state: AppStore) => state.schedule.scheduleItemList;
  try {
    const currentSchedule: ScheduleItem[] = yield select(selector);
    const result: number = yield call(deleteSchedule, action.payload);
    console.log('deleteScheduleItem result=', result);
    const newScheduleList = currentSchedule.filter(
      (s) => s.id !== action.payload.id
    );
    yield put(scheduleActions.setDeletedScheduleItemList(newScheduleList));
  } catch (e: any) {
    yield put(scheduleActions.AsyncFailureSchedule(e.message));
  }
}

export default function* handleScheduleActions() {
  yield takeLatest(scheduleActions.fetchScheduleItem, fetchSchedule);
  yield takeLatest(scheduleActions.addScheduleItem, addScheduleItem);
  yield takeLatest(scheduleActions.deleteScheduleItem, deleteScheduleItem);
}
