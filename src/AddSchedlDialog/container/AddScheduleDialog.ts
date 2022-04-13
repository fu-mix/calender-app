import { connect } from 'react-redux';
import { AppStore } from '../../modules';
import { addScheduleActions } from '../../modules/addSchedule';
import { Dispatch, Action } from 'redux';
import { AddScheduleDialog } from '../component/AddScheduleDialog';
import {
  scheduleActions,
  ScheduleItem,
  AddScheduleItem,
} from '../../modules/schedule';
import { isCloseDialog } from '../../util/schedule';

export const mapStateToProps = (state: AppStore) => {
  return {
    addSchedule: state.addSchedule,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    openDialog: () => {
      dispatch(addScheduleActions.openDialog());
    },
    closeDialogDispatch: () => {
      dispatch(addScheduleActions.closeDialog());
    },

    setSchedule: (value: AddScheduleItem) => {
      dispatch(addScheduleActions.setSchedule(value));
    },
    startEdit: () => {
      dispatch(addScheduleActions.startEdit());
    },
    saveScheduleDispatch: (scheduleItem: AddScheduleItem) => {
      dispatch(scheduleActions.addScheduleItem(scheduleItem));
      dispatch(addScheduleActions.closeDialog());
    },
    setIsEditStart: () => {
      dispatch(addScheduleActions.startEdit());
    },
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => {
  const {
    addSchedule: { form: schedule },
  } = stateProps;
  const { saveScheduleDispatch, closeDialogDispatch } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveScheduleDispatch(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialogDispatch();
      }
    },
  };
};

export type AddScheduleProps = ReturnType<typeof mergeProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
