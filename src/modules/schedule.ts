import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface Schedule {
  id: number;
  date: Date;
  title: string;
  location: string;
  description: string;
}

export interface FetchSchedule {
  month: string;
  year: string;
}
export interface setSchedule {
  title: string;
  data: Date;
  description: string;
  location: string;
}

// Actions
const actionCreator = actionCreatorFacory();
export const scheduleActions = {
  fetchScheduleItem: actionCreator<FetchSchedule>('FETCH_SCHEDULE_ITEM'),
  setScheduleItem: actionCreator<setSchedule>('SET_SCHEDULE_ITEM'),
};

// Reducer
const initialState: Schedule[] = [];
export const scheduleReducer = reducerWithInitialState(initialState).case(
  scheduleActions.setScheduleItem,
  (state: Schedule[], schedule) => ({
    ...state,
    schedule,
  })
);
