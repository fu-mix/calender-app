import dayjs from 'dayjs';
import { ScheduleItem } from '../modules/schedule';
import { isSameDay } from '../util/calendar';
import { AddScheduleItem } from '../modules/schedule';
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

const isScheduleEmpty = (schedule: AddScheduleItem) =>
  !schedule.title && !schedule.description && !schedule.location;

export const isCloseDialog = (schedule: AddScheduleItem) => {
  const message = 'Do you want to discard unsabed changes?';

  return isScheduleEmpty(schedule) || window.confirm(message);
};
