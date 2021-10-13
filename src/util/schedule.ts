import dayjs from 'dayjs';
import { ScheduleItem } from '../modules/schedule';
import { isSameDay } from '../util/calendar';

export const formatSchedule = (scheduleItem: ScheduleItem) => ({
  ...scheduleItem,
  date: dayjs(scheduleItem.date),
});

export const setSchedule = (
  calendarList: dayjs.Dayjs[],
  scheduleList: ScheduleItem[]
) =>
  calendarList.map((cal) => ({
    date: cal,
    scheduleList: scheduleList.filter((e) => isSameDay(e.date, cal)),
  }));
