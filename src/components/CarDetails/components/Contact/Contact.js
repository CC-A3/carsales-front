import React, {useState} from 'react';
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
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../../../Utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  btn: {
    marginLeft: '10px',
  },
}));

const Contact = (details) => {
  const history = useHistory();
  const id = details.details.ownerId;
  const [owner, setOwner] = useState([])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen =async () => {
    setOpen(true);
    const fetchOwnerDetails =await api.fetchClientProfile(id);
    if (fetchOwnerDetails.status === 200) {
      setOwner(fetchOwnerDetails.data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };



  const email = localStorage.getItem("email");
  const title = details.details.title;
  const price = details.details.price;
  const kilometers = details.details.kilometers;
  const colour = details.details.colour;
  const body = details.details.body;
  const engine = details.details.engine;
  const transmission = details.details.transmission;
  const fuelConsumption = details.details.fuelConsumption;
  const type = details.details.type;
  const fullName = owner.fullName;
  const OwnerEmail = owner.email;
  const phoneNumber = owner.phoneNumber;

  const url = type.toLowerCase();

  const handleSend = () => {
    console.log(
      email,
      title,
      price,
      kilometers,
      colour,
      body,
      engine,
      transmission,
      fuelConsumption,
      type,
      fullName,
      OwnerEmail,
      phoneNumber
    );

    
    api.sendSheet({
      email,
      title,
      price,
      kilometers,
      colour,
      body,
      engine,
      transmission,
      fuelConsumption,
      type,
      fullName,
      OwnerEmail,
      phoneNumber
    })

    setOpen(false);
  }


  const goBack = () => {
    history.push(`/dashboard-customer/dashboard/cars/${url}`)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={goBack}  >
        Go Back
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.btn}>
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
          <Button onClick={handleSend} color="primary" autoFocus>
            Send Configuration Sheet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;
