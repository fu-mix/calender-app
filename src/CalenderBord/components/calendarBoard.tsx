import * as React from 'react';
import { CalendarBoardProps } from '../container/calendarBoard';
import { GridList, Typography } from '@material-ui/core';
const { useEffect, useCallback } = React;
import { CalendarElement } from '../../CalenderElement/components/calendarElement';
import dayjs from 'dayjs';
import style from './calendarBoard.module.css';
import AddScheduleDialog from '../../AddSchedlDialog/container/AddScheduleDialog';

const days = ['日', '月', '火', '水', '木', '金', '土'];

const now = dayjs('2021-09-29');
// const dummy_schedule = {
//   id: 1,
//   date: now,
//   title: 'React meeting',
//   location: 'tokyo',
//   description: 'react',
// } as ScheduleItem;

// const handleOnclick = (schedule: ScheduleItem) => {
//   console.log(schedule);
// };

export const CalendarBoard: React.FC<CalendarBoardProps> = ({
  fetchSchedule,
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
}) => {
  useEffect(() => {
    fetchSchedule();
  }, []);

  const onClickAddSchedule = useCallback((date: dayjs.Dayjs) => {
    openAddScheduleDialog(date);
  }, []);

  return (
    <div className={style.container}>
      <GridList className={style.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={style.day}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div">
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, scheduleList }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}>
            <CalendarElement
              day={date}
              yearMonthObj={month}
              scheduleList={scheduleList}
              onClickSchedule={(schedule, e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                openCurrentScheduleDialog(schedule);
              }}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};
