import { connect } from 'react-redux';
import { AppStore } from '../../modules';
import { addScheduleActions } from '../../modules/addSchedule';
import { Dispatch, Action } from 'redux';
import { AddScheduleDialog } from '../component/AddScheduleDialog';

export const mapStateToProps = (state: AppStore) => {
  return {
    addSchedule: state.addSchedule,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addDialogOpen: () => {
      dispatch(addScheduleActions.openDialog());
    },
    addDialogClose: () => {
      dispatch(addScheduleActions.closeDialog());
    },
  };
};

export type AddScheduleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
