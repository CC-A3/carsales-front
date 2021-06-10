import React, {useEffect, useState} from 'react';
import {
  Button,
  Dialog,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call';
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../../../Utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Contact = (details) => {
  const id = details.details.ownerId;
  const [owner, setOwner] = useState([])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen =async () => {
    setOpen(true);
    console.log(id, "ownerId")
    const fetchOwnerDetails =await api.fetchClientProfile(id);
    if (fetchOwnerDetails.status === 200) {
      setOwner(fetchOwnerDetails.data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Contact SELLER
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
              </ListItemAvatar>
            <ListItemText primary="Owner:" secondary={owner.fullName} />
          </ListItem>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email:" secondary={owner.email} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone Number:" secondary={(owner.phoneNumber === null) ? <>No Contact</> : owner.phoneNumber} />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;
