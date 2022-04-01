import { connect, MergeProps } from 'react-redux';
import { AppStore } from '../../modules';
import { currentScheduleActions } from '../../modules/currentSchedule';
import { scheduleActions } from '../../modules/schedule';
import { Dispatch, Action } from 'redux';
import { CurrentScheduleDialog } from '../components/CurrentScheduleDialog';

const mapStateToProps = (state: AppStore) => {
  return {
    currentSchedule: state.currentSchedule,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    closeDialog: () => {
      dispatch(currentScheduleActions.CurrentScheduleCloseDialog());
    },
    deleteItemDispatch: (id: number) => {
      dispatch(scheduleActions.deleteScheduleItem({ id: id }));
      dispatch(currentScheduleActions.CurrentScheduleCloseDialog());
    },
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.currentSchedule.item;
    dispatchProps.deleteItemDispatch(id);
  },
});

export type CurrentScheduleDialogProps = ReturnType<typeof mergeProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentScheduleDialog);
