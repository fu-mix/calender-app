import * as React from 'react';
import { ScheduleItem } from '../../modules/schedule';
import style from './schedule.module.css';

interface ScheduleProps {
  schedule: ScheduleItem;
  onClickSchedule: (
    schedule: ScheduleItem,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({
  schedule,
  onClickSchedule,
}) => {
  return (
    <div
      className={style.schedule}
      onClick={(e) => onClickSchedule(schedule, e)}>
      {schedule.title}
    </div>
  );
};

export default Schedule;
