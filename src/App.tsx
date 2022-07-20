import React from 'react';
import CalendarBoard from './CalenderBord/container/calendarBoard';
// import Schedule from './Schedule/components/schedule';
import { ScheduleItem } from './modules/schedule';
import AddScheduleDialog from './AddSchedlDialog/container/AddScheduleDialog';
import CurrentSchduleDialog from './CurrentScheduleDialog/container/CurrentScheduleDialog';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateAdapter from '@date-io/dayjs';
import dayjs from 'dayjs';
import Navigation from './Navigation/container/Navigation';
import { RecoilRoot } from 'recoil';

const today = dayjs();

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateAdapter}>
      <Navigation />
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading</div>}>
          <CalendarBoard />
        </React.Suspense>
      </RecoilRoot>
      <AddScheduleDialog />
      <CurrentSchduleDialog />
    </MuiPickersUtilsProvider>
  );
};
export default App;
