import dayjs from 'dayjs';
import { CalendarMonth } from '../modules/calendar';

export const createCalendar = ({ year, month }: CalendarMonth) => {
  const firstDay = getMonth({ year, month });
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, 'day');
      return day;
    });
};

export const getMonth = ({ year, month }: CalendarMonth): dayjs.Dayjs => {
  return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs): boolean => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1: dayjs.Dayjs, m2: dayjs.Dayjs) => {
  const format = 'YYYYMM';
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day: dayjs.Dayjs) => day.date() === 1;

export const formatMonth = (day: dayjs.Dayjs) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const getNextMonth = (month: CalendarMonth) => {
  const day = getMonth(month).add(1, 'month');
  return formatMonth(day);
};

export const getPreviousMonth = (month: CalendarMonth) => {
  const day = getMonth(month).add(-1, 'month');
  return formatMonth(day);
};
