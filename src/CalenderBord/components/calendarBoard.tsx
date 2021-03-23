import * as React from 'react';
import { CalendarBoardProps } from '../container/calendarBoard';
const { useEffect } = React;

export const CalendarBoard: React.FC<CalendarBoardProps> = ({
  fetchSchedule,
  schedule,
}) => {
  useEffect(() => {
    fetchSchedule({ year: '2021', month: '2' });
  }, []);
  console.log('schedule', schedule);
  return <div>CalendarBoard</div>;
};
