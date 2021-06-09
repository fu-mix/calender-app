import * as React from 'react';
import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
  GetMonthProps,
} from '../../util/calendar';
import ScheduleItem from '../../ScheduleItem/components/scheduleItem';
import style from './calendarElement.module.css';
import { Schedule } from '../../modules/schedule';

interface CalendarElementProps {
  day: dayjs.Dayjs;
  yearMonthObj: GetMonthProps;
  scheduleList: Schedule[];
  onClickSchedule: (
    schedule: Schedule,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

export const CalendarElement: React.FC<CalendarElementProps> = ({
  day,
  yearMonthObj,
  scheduleList,
  onClickSchedule,
}) => {
  const today = dayjs();

  const currentMonth = getMonth(yearMonthObj);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';

  const format = isFirstDay(day) ? 'M月D日' : 'D';

  const isToday = isSameDay(day, today);

  return (
    <div className={style.element}>
      <Typography
        className={style.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div">
        <span className={isToday ? style.today : ''}>{day.format(format)}</span>
      </Typography>
      <div className={style.schedules}>
        {scheduleList.map((e) => (
          <ScheduleItem
            key={e.id}
            schedule={e}
            onClickSchedule={onClickSchedule}
          />
        ))}
      </div>
    </div>
  );
};
