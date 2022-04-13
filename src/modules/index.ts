import { combineReducers } from 'redux';
import { scheduleReducer, ScheduleInititalStateProps } from './schedule';
import { CalendarReducer, CalendarMonth } from './calendar';
import { addScheduleReducer, AddSchedule } from './addSchedule';
import { CurrentScheduleItem, currentScheduleReducer } from './currentSchedule';

export interface AppStore {
  schedule: ScheduleInititalStateProps;
  calendar: CalendarMonth;
  addSchedule: AddSchedule;
  currentSchedule: CurrentScheduleItem;
}

export const rootReducer = combineReducers<AppStore>({
  schedule: scheduleReducer,
  calendar: CalendarReducer,
  addSchedule: addScheduleReducer,
  currentSchedule: currentScheduleReducer,
});
