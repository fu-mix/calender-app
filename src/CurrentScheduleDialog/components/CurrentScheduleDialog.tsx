import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Tooltip,
  IconButton,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  Close,
  LocationOnOutlined,
  NotesOutlined,
  DeleteOutlineOutlined,
} from '@material-ui/icons';
import style from './CurrentScheduleDialog.module.css';
import { CurrentScheduleDialogProps } from '../container/CurrentScheduleDialog';

const spacer = (top: number, bottom: number) => ({
  margin: `${top}px 0 ${bottom}x 0`,
});

export const CurrentScheduleDialog: React.FC<CurrentScheduleDialogProps> = ({
  currentSchedule: { item, isDialogOpen },
  closeDialog,
  deleteItem,
}) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => closeDialog()}
      maxWidth="xs"
      fullWidth>
      <DialogActions>
        <div className={style.closeButton}>
          <Tooltip title="delete" placement="bottom">
            <IconButton onClick={() => deleteItem()} size="small">
              <DeleteOutlineOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="close" placement="bottom">
            <IconButton onClick={() => closeDialog()} size="small">
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogActions>

      <DialogContent>
        {item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 30)}>
                <Grid item>
                  <span className={style.box}></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.date.format('M月 D日')}
                  </Typography>
                </Grid>
                {item.location && (
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="space-between"
                    style={spacer(0, 4)}>
                    <Grid item>
                      <LocationOnOutlined />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>{item.location}</Typography>
                    </Grid>
                  </Grid>
                )}
                {item.description && (
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="space-between"
                    style={spacer(0, 4)}>
                    <Grid item>
                      <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>{item.description}</Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
