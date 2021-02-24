import { combineReducers } from 'redux';
import { scheduleReducer, Schedule } from './schedule';

export interface AppStore {
  schedule: Schedule[];
}

export const rootReducer = combineReducers<AppStore>({
  schedule: scheduleReducer,
});
