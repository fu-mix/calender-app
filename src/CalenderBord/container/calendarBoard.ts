import { connect } from 'react-redux';
import { AppStore } from '../../modules';
import { scheduleActions } from '../../modules/schedule';
import { CalendarMonth } from '../../modules/calendar';
import { CalendarBoard } from '../components/calendarBoard';
import { Dispatch, Action } from 'redux';
import { setSchedule } from '../../util/schedule';
import { createCalendar } from '../../util/calendar';
import { addScheduleActions } from '../../modules/addSchedule';

export const mapStateToProps = (state: AppStore) => {
  return {
    scheduleList: state.schedule,
    calendar: state.calendar,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchSchedule: (props: CalendarMonth) => {
      dispatch(scheduleActions.fetchScheduleItem(props));
    },
    addScheduleOpen: () => {
      dispatch(addScheduleActions.openDialog());
    },
  };
};

type stateProps = ReturnType<typeof mapStateToProps>;
type dispatchProps = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: stateProps, dispatchProps: dispatchProps) => {
  const {
    calendar: month,
    scheduleList: { scheduleItemList: scheduleItemList },
  } = stateProps;

  const calendar = setSchedule(createCalendar(month), scheduleItemList);

  return {
    ...stateProps,
    ...dispatchProps,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    calendar,
    month,
  };
};

export type CalendarBoardProps = ReturnType<typeof mergeProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
