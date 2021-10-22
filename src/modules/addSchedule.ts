import actionCreatorFacory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface AddSchedule {
  isDialogOpen: boolean;
}

const actionCreator = actionCreatorFacory();

export const addScheduleActions = {
  openDialog: actionCreator('OPEN_DIALOG'),
  closeDialog: actionCreator('CLOSE_DIALOG'),
};

const initalState: AddSchedule = {
  isDialogOpen: false,
};

export const addScheduleReducer = reducerWithInitialState(initalState)
  .case(addScheduleActions.openDialog, (state) => ({
    ...state,
    isDialogOpen: true,
  }))
  .case(addScheduleActions.closeDialog, () => ({ ...initalState }));
