import React from 'react';
import CalendarBoard from './CalenderBord/container/calendarBoard';
import ScheduleItem from './ScheduleItem/components/scheduleItem';
import { Schedule } from './modules/schedule';

const handleOnclick = (schedule: Schedule) => {
  console.log('test', schedule);
};
const today = new Date();
const dummy = {
  id: 1,
  date: today,
  title: 'React meeting!',
  location: 'tokyo',
  description: 'react',
} as Schedule;

const App: React.FC = () => {
  return (
    <>
      <div>Hellow</div>
      <CalendarBoard />
      <ScheduleItem
        schedule={dummy}
        onClickSchedule={() => handleOnclick(dummy)}
      />
    </>
  );
};
export default App;
