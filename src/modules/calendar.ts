import dayjs from 'dayjs';
import { formatMonth } from '../util/calendar';
import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const day = dayjs();
const initialState = formatMonth(day);

export interface CalendarMonth {
  month: number;
  year: number;
}
const actionCreator = actionCreatorFacory();
export const calendarActions = {
  setCalendarMonth: actionCreator<CalendarMonth>('setCalendarMonth'),
};

export const CalendarReducer = reducerWithInitialState(initialState).case(
  calendarActions.setCalendarMonth,
  (state, CalendarMonth) => ({
    ...state,
    ...CalendarMonth,
  })
);
