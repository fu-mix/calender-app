import { combineReducers } from 'redux';
import { scheduleReducer, ScheduleInititalStateProps } from './schedule';
import { CalendarReducer, CalendarMonth } from './calendar';
import { addScheduleReducer, AddSchedule } from './addSchedule';

export interface AppStore {
  schedule: ScheduleInititalStateProps;
  calendar: CalendarMonth;
  addSchedule: AddSchedule;
}

export const rootReducer = combineReducers<AppStore>({
  schedule: scheduleReducer,
  calendar: CalendarReducer,
  addSchedule: addScheduleReducer,
});
