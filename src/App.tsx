import React from 'react';
import CalendarBoard from './CalenderBord/container/calendarBoard';
import ScheduleItem from './ScheduleItem/components/scheduleItem';
import { Schedule } from './modules/schedule';
import { CalendarElement } from './CalenderElement/components/calendarElement';
import dayjs from 'dayjs';

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
  const now = dayjs();
  return (
    <>
      <div>Hellow</div>
      <CalendarBoard />
      <ScheduleItem
        schedule={dummy}
        onClickSchedule={() => handleOnclick(dummy)}
      />
      <CalendarElement
        day={now}
        yearMonthObj={{ year: '2021', month: '6' }}
        scheduleList={[dummy, dummy]}
        onClickSchedule={() => handleOnclick(dummy)}
      />
    </>
  );
};
export default App;
