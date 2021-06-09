import dayjs from 'dayjs';

export interface GetMonthProps {
  year: string;
  month: string;
}

export const getMonth = ({ year, month }: GetMonthProps): dayjs.Dayjs => {
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

export const getNextMonth = (month: GetMonthProps) => {
  const day = getMonth(month).add(1, 'month');
  return formatMonth(day);
};

export const getPreviousMonth = (month: GetMonthProps) => {
  const day = getMonth(month).add(-1, 'month');
  return formatMonth(day);
};
