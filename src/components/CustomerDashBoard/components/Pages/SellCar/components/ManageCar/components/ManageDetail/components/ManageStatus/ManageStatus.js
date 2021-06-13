import React from 'react';
import {
  Button,
  Dialog,
  ListItem,
  ListItemText,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../../../../../../../../../../Utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ManageStatus = ({ details, update, setUpdate }) => {
  const classes = useStyles();
  const id = details.id;

  const [value, setValue] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen =async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = async () => {
    const status = value;

    setOpen(false);
    try {
      const changeStatusRes = await api.changeStatus({ id, status });
      if (changeStatusRes.status === 200) {
        console.log("change status success");
        setUpdate(update + 1);
      }
    } catch (error) {}
  };

  const handleStatus = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Modify Status
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <ListItem>
            <ListItemText primary="This vehicle current status is" secondary={`${details.status}`} />
          </ListItem>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
          </DialogContentText>

          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleStatus}
            >
                <MenuItem value="AVAILABLE">AVAILABLE</MenuItem>
                <MenuItem value="PENDING">PENDING</MenuItem>
                <MenuItem value="SOLD">SOLD</MenuItem>
              </Select>
            </FormControl>
          
              <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleChange} color="primary" autoFocus>
                Modify
              </Button>
            </DialogActions>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default ManageStatus;
