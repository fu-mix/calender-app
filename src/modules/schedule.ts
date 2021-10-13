import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import dayjs from 'dayjs';
import { CalendarMonth } from './calendar';

export interface ScheduleItem {
  id: number;
  date: dayjs.Dayjs;
  title: string;
  location: string;
  description: string;
}

export type DeleteSchedule = Pick<ScheduleItem, 'id'>;

export interface ErrorSchedule {
  error: any;
}

// Actions
const actionCreator = actionCreatorFacory();
export const scheduleActions = {
  fetchScheduleItem: actionCreator<CalendarMonth>('FETCH_SCHEDULE_ITEM'),
  addScheduleItem: actionCreator<ScheduleItem>('ADD_SCHEDULE_ITEM'),
  setScheduleItemList: actionCreator<ScheduleItem[]>('SET_SCHEDULE_ITEM_LIST'),
  deleteScheduleItem: actionCreator<DeleteSchedule>('DELETE_SCHEDUL_ITEM'),
  setLoadingSchedule: actionCreator('SETLOADING_SCHEDULE'),
  AsyncFailureSchedule: actionCreator<ErrorSchedule>('ASYNCFAILURE_SCHEDULE'),
  ResetErrorSchedule: actionCreator('RESETERROR_SCHEDULE'),
};

// Reducer

export interface ScheduleInititalStateProps {
  scheduleItemList: ScheduleItem[];
  isLoading: boolean;
  error: any;
}

const initialState: ScheduleInititalStateProps = {
  scheduleItemList: [],
  isLoading: false,
  error: null,
};

export const scheduleReducer = reducerWithInitialState(initialState)
  .case(scheduleActions.setScheduleItemList, (state, scheduleItemList) => ({
    ...state,
    isLoading: false,
    scheduleItemList,
  }))
  .case(scheduleActions.addScheduleItem, (state, scheduleItem) => ({
    ...state,
    scheduleList: [...state.scheduleItemList, scheduleItem],
  }))
  .case(scheduleActions.setLoadingSchedule, (state) => ({
    ...state,
    isLoading: true,
  }))
  .case(scheduleActions.AsyncFailureSchedule, (state, error) => ({
    ...state,
    error,
  }))
  .case(scheduleActions.ResetErrorSchedule, (state) => ({
    ...state,
    error: null,
  }));
// .default((state) => ({
//   ...state,
// }));
