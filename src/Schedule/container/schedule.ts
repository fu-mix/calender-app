import { connect } from 'react-redux';
import { AppStore } from '../../modules';
import { scheduleActions, FetchSchedule } from '../../modules/schedule';
import { ScheduleItem } from '../components/schedule';
import { Dispatch, Action } from 'redux';

export const mapStateToProps = (state: AppStore) => {
  return {
    schedule: state.schedule,
  };
};
export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchSchedule: (props: FetchSchedule) => {
      dispatch(scheduleActions.fetchScheduleItem(props));
    },
  };
};

export type ScheduleProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const Schedule = connect(mapStateToProps, mapDispatchToProps)(ScheduleItem);

export default Schedule;
