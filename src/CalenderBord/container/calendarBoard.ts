import { connect } from 'react-redux';
import { AppStore } from '../../modules';
import { scheduleActions, FetchSchedule } from '../../modules/schedule';
import { CalendarBoard } from '../components/calendarBoard';
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

export type CalendarBoardProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBoard);
