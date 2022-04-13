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

export type AddScheduleItem = Omit<ScheduleItem, 'id'>;

export type DeleteSchedule = Pick<ScheduleItem, 'id'>;

export interface ErrorSchedule {
  error: any;
}

// Actions
const actionCreator = actionCreatorFacory();
export const scheduleActions = {
  fetchScheduleItem: actionCreator<CalendarMonth>('FETCH_SCHEDULE_ITEM'),
  addScheduleItem: actionCreator<AddScheduleItem>('ADD_SCHEDULE_ITEM'),
  setFetchScheduleItemList: actionCreator<ScheduleItem[]>(
    'SET_FETCH_SCHEDULE_ITEM'
  ),
  setScheduleItem: actionCreator<ScheduleItem>('SET_SCHEDULE_ITEM_LIST'),
  deleteScheduleItem: actionCreator<DeleteSchedule>('DELETE_SCHEDUL_ITEM'),
  setDeletedScheduleItemList: actionCreator<ScheduleItem[]>(
    'SET_DELETED_SCHEDULE_ITEM_LIST'
  ),
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
  .case(scheduleActions.setScheduleItem, (state, scheduleItem) => ({
    ...state,
    isLoading: false,
    scheduleItemList: [...state.scheduleItemList, scheduleItem],
  }))
  .case(scheduleActions.addScheduleItem, (state, scheduleItem) => ({
    ...state,
    scheduleList: [...state.scheduleItemList, scheduleItem],
  }))
  .case(
    scheduleActions.setFetchScheduleItemList,
    (state, scheduleItemList) => ({
      ...state,
      scheduleItemList,
    })
  )
  .case(
    scheduleActions.setDeletedScheduleItemList,
    (state, scheduleItemList) => ({
      ...state,
      scheduleItemList,
    })
  )
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
