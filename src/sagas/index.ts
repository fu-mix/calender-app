import { all } from 'redux-saga/effects';
import handleScheduleActions from './schedule';

export default function* rootSaga() {
  yield all([handleScheduleActions()]);
}
