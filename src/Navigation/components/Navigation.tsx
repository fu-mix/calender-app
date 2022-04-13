import React from 'react';
import { IconButton, Toolbar, Typography, Tooltip } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { DatePicker } from '@material-ui/pickers';
import { NavigationProps } from '../container/Navigation';
import style from './Navigation.module.css';
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Navigation: React.FC<NavigationProps> = ({
  setPreviousMonth,
  setNextMonth,
  setMonth,
  month,
}) => {
  return (
    <Toolbar className={style.toolbar}>
      <IconButton>
        <DehazeIcon />
      </IconButton>

      <Typography
        className={style.typography}
        color="textSecondary"
        variant="h5"
        component="h1">
        Calendar
      </Typography>
      <Tooltip title="Previus month" placement="bottom">
        <IconButton size="small" onClick={setPreviousMonth}>
          <ArrowBackIos />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next month" placement="bottom">
        <IconButton size="small" onClick={setNextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
      <DatePicker
        className={style.datePicker}
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </Toolbar>
  );
};
