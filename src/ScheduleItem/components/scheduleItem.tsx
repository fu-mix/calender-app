import * as React from 'react';
import { Schedule } from '../../modules/schedule';
import style from './scheduleItem.module.css';

interface ScheduleProps {
  schedule: Schedule;
  onClickSchedule: (
    schedule: Schedule,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

export const ScheduleItem: React.FC<ScheduleProps> = ({
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

export default ScheduleItem;
