import * as React from 'react';
import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
} from '../../util/calendar';
import Schedule from '../../Schedule/components/schedule';
import style from './calendarElement.module.css';
import { ScheduleItem } from '../../modules/schedule';
import { CalendarMonth } from '../../modules/calendar';

interface CalendarElementProps {
  day: dayjs.Dayjs;
  yearMonthObj: CalendarMonth;
  scheduleList: ScheduleItem[];
  onClickSchedule: (
    schedule: ScheduleItem,
    e: React.MouseEvent<HTMLElement>
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
          <Schedule key={e.id} schedule={e} onClickSchedule={onClickSchedule} />
        ))}
      </div>
    </div>
  );
};
