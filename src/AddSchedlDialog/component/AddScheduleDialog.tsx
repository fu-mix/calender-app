import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  Button,
  Input,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
import {
  Close,
  AccessTime,
  LocationOnOutlined,
  NotesOutlined,
} from '@material-ui/icons';
import { AddScheduleProps } from '../container/AddScheduleDialog';
import style from './AddScheduleDialog.module.css';
import { DatePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';

const { useCallback } = React;

export const AddScheduleDialog: React.FC<AddScheduleProps> = ({
  setSchedule,
  closeDialog,
  addSchedule,
  setIsEditStart,
  saveSchedule,
}) => {
  const {
    isDialogOpen,
    isStartEdit,
    form: { title, description, date, location },
  } = addSchedule;

  const isTitleValid = !title && isStartEdit;
  const handleOnlose = useCallback(() => {
    closeDialog();
  }, [addSchedule.form]);

  const handleOnSave = useCallback(() => {
    saveSchedule();
  }, [addSchedule.form]);

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => closeDialog()}
      maxWidth="xs"
      fullWidth>
      <DialogActions>
        <div className={style.closeButton}>
          <Tooltip title="close" placement="bottom">
            <IconButton onClick={() => closeDialog()} size="small">
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogActions>

      <DialogContent>
        <Input
          className={style.title}
          value={title}
          onChange={(e) =>
            setSchedule({ ...addSchedule.form, title: e.target.value })
          }
          autoFocus
          fullWidth
          onBlur={setIsEditStart}
          error={isTitleValid}
          placeholder="title and date"
        />
        <div className={style.validation}>
          {isTitleValid && (
            <Typography variant="caption" component="div" color="error">
              title
            </Typography>
          )}
        </div>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={date}
              onChange={(d) =>
                setSchedule({ ...addSchedule.form, date: d as dayjs.Dayjs })
              }
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              className="style.spacer"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              value={location}
              onChange={(e) =>
                setSchedule({ ...addSchedule.form, location: e.target.value })
              }
              className={style.spacer}
              fullWidth
              placeholder="please add location"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              value={description}
              onChange={(e) =>
                setSchedule({
                  ...addSchedule.form,
                  description: e.target.value,
                })
              }
              className={style.spacer}
              fullWidth
              placeholder="please add description"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => saveSchedule()}
          disabled={!title}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
