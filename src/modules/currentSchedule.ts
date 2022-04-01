import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ScheduleItem } from './schedule';
import dayjs from 'dayjs';

export interface CurrentScheduleItem {
  item: ScheduleItem;
  isDialogOpen: boolean;
}

const actionCreator = actionCreatorFacory();

export const currentScheduleActions = {
  CurrentScheduleOpenDialog: actionCreator('CURRENT_SCHEDULE_OPEN_DIALOG'),
  CurrentScheduleCloseDialog: actionCreator('CURENT_SCHEDULE_CLOSE_DIALOG'),
  CurrentScheduleSetItem: actionCreator<ScheduleItem>(
    'CURRENT_SCHEDULE_SET_ITEM'
  ),
};

const initialState: CurrentScheduleItem = {
  item: {
    date: dayjs(),
    location: '',
    title: '',
    description: '',
    id: 0,
  },
  isDialogOpen: false,
};

export const currentScheduleReducer = reducerWithInitialState(initialState)
  .case(currentScheduleActions.CurrentScheduleOpenDialog, (state) => ({
    ...state,
    isDialogOpen: true,
  }))
  .case(currentScheduleActions.CurrentScheduleCloseDialog, (state) => ({
    ...state,
    isDialogOpen: false,
  }))
  .case(currentScheduleActions.CurrentScheduleSetItem, (state, data) => ({
    ...state,
    item: data,
  }));
