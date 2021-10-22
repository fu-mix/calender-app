import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { AddScheduleProps } from '../container/AddScheduleDialog';

export const AddScheduleDialog: React.FC<AddScheduleProps> = ({
  addDialogClose,
  addSchedule,
}) => {
  const { isDialogOpen } = addSchedule;
  return (
    <Dialog open={isDialogOpen} onClose={addDialogClose}>
      <DialogActions>
        <div>
          <Tooltip title="close" placement="bottom">
            <IconButton
              onClick={() => {
                addDialogClose();
              }}>
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogActions>

      <DialogContent>
        <div>Schedule</div>
      </DialogContent>
    </Dialog>
  );
};
