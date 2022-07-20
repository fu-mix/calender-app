import { selectorFamily, useRecoilValue } from 'recoil';
import { RecoilSelectorKeys } from '../RecoilKeys';
import dayjs from 'dayjs';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

type ScheduleItem = {
  id: number;
  date: dayjs.Dayjs;
  title: string;
  location: string;
  description: string;
};

type CalendarMonth = {
  month: number;
  year: number;
};

type ScheduleSelectors = {
  useFetchSchedule: (calendarMonth: CalendarMonth) => ScheduleItem[];
};

export const scheduleFetchResult = selectorFamily<
  ScheduleItem[],
  CalendarMonth
>({
  key: RecoilSelectorKeys.SCHEDULE_FETCH_RESULT,
  get:
    (calendarMonth: CalendarMonth) =>
    async ({ get }) => {
      const { month, year } = calendarMonth;
      const REQUEST_URL = `${API_URL}/schedules?month=${month}&year=${year}`;
      const result: ScheduleItem[] = await axios
        .get(REQUEST_URL)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return err;
        });
      return result;
    },
});
export const scheduleSelectors: ScheduleSelectors = {
  useFetchSchedule: (calendarMonth: CalendarMonth) =>
    useRecoilValue(scheduleFetchResult(calendarMonth)),
};
