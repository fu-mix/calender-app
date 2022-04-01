import Navigation from '../components/Navigation';
import { connect } from 'react-redux';
import { calendarActions, CalendarMonth } from '../../modules/calendar';
import { scheduleActions } from '../../modules/schedule';
import { AppStore } from '../../modules';
import { Dispatch, Action } from 'redux';
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from '../../util/calendar';
import dayjs from 'dayjs';

const mapStateToProps = (state: AppStore) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    setMonthDispatch: (month: CalendarMonth) => {
      dispatch(calendarActions.setCalendarMonth(month));
    },
    fetchItem: (month: CalendarMonth) => {
      dispatch(scheduleActions.fetchScheduleItem(month));
    },
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => {
  const { calendar } = stateProps;
  const { setMonthDispatch, fetchItem } = dispatchProps;

  return {
    month: getMonth(calendar),
    setNextMonth: () => {
      const nextMonth = getNextMonth(calendar);
      setMonthDispatch(nextMonth);
      fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
      const previousMonth = getPreviousMonth(calendar);
      setMonthDispatch(previousMonth);
      fetchItem(previousMonth);
    },
    setMonth: (dayObj: dayjs.Dayjs) => {
      const month = formatMonth(dayObj);
      setMonthDispatch(month);
      fetchItem(month);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
