import * as React from 'react';
import { ScheduleProps } from '../container/schedule';
// import { useDispatch } from 'react-redux';
// import { scheduleActions } from '../../modules/schedule';

const { useEffect } = React;

export const ScheduleItem: React.FC<ScheduleProps> = ({
  fetchSchedule,
  schedule,
}) => {
  // const dispatch = useDispatch();
  useEffect(() => {
    fetchSchedule({ year: '2021', month: '2' });
    // dispatch(scheduleActions.fetchScheduleItem({ year: '2021', month: '2' }));
  }, []);

  console.log('Schedule', schedule);
  return <div>schedule</div>;
};
