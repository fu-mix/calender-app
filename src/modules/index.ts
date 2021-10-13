import { combineReducers } from 'redux';
import { scheduleReducer, ScheduleInititalStateProps } from './schedule';
import { CalendarReducer, CalendarMonth } from './calendar';

export interface AppStore {
  schedule: ScheduleInititalStateProps;
  calendar: CalendarMonth;
}

export const rootReducer = combineReducers<AppStore>({
  schedule: scheduleReducer,
  calendar: CalendarReducer,
});
