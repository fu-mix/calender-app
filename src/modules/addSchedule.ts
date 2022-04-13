import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { AddScheduleItem } from './schedule';
import dayjs from 'dayjs';

export interface AddSchedule {
  form: {
    title: string;
    description: string;
    date: dayjs.Dayjs;
    location: string;
  };
  isDialogOpen: boolean;
  isStartEdit: boolean;
}

type SetValueFromCal = Pick<AddScheduleItem, 'date'>;

const actionCreator = actionCreatorFacory();

export const addScheduleActions = {
  openDialog: actionCreator('ADDSCHEDULE_OPEN_DIALOG'),
  closeDialog: actionCreator('ADDSCHEDULE_CLOSE_DIALOG'),
  setSchedule: actionCreator<AddScheduleItem>('ADDSCHEDULE_SET_VALUE'),
  setScheduleFromCal: actionCreator<SetValueFromCal>('SET_VALUE_FROM_CAL'),
  startEdit: actionCreator('ADDSCEDULE_START_EDIT'),
};

const initalState: AddSchedule = {
  form: {
    title: '',
    description: '',
    date: dayjs(),
    location: '',
  },
  isDialogOpen: false,
  isStartEdit: false,
};

export const addScheduleReducer = reducerWithInitialState(initalState)
  .case(addScheduleActions.openDialog, (state) => ({
    ...state,
    isDialogOpen: true,
  }))
  .case(addScheduleActions.closeDialog, () => ({ ...initalState }))
  .case(addScheduleActions.setSchedule, (state, data) => ({
    ...state,
    form: { ...state.form, ...data },
  }))
  .case(addScheduleActions.startEdit, (state) => ({
    ...state,
    isStartEdit: true,
  }))
  .case(addScheduleActions.setScheduleFromCal, (state, day) => ({
    ...state,
    form: { ...state.form, ...day },
  }));
