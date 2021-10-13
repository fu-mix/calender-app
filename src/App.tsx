import React from 'react';
import CalendarBoard from './CalenderBord/container/calendarBoard';
import Schedule from './Schedule/components/schedule';
import { ScheduleItem } from './modules/schedule';
import dayjs from 'dayjs';

const handleOnclick = (schedule: ScheduleItem) => {
  console.log('test', schedule);
};
const today = dayjs();
const dummy = {
  id: 1,
  date: today,
  title: 'React meeting!',
  location: 'tokyo',
  description: 'react',
} as ScheduleItem;

const App: React.FC = () => {
  return (
    <>
      <div>Calendar</div>
      <CalendarBoard />
      <Schedule schedule={dummy} onClickSchedule={() => handleOnclick(dummy)} />
    </>
  );
};
export default App;
