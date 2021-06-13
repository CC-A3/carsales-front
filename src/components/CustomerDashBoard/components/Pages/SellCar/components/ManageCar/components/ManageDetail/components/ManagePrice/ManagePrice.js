import React from 'react';
import {
  Button,
  Dialog,
  TextField,
  ListItem,
  ListItemText,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Formik, Field, Form } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../../../../../../../../../../Utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '0'
  },
}));

const ManagePrice = ({ details, update, setUpdate }) => {
  const id = details.id;
  const price = details.price;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const initialValues = {
    price: "",
  };

  const handleChange = async ({ price }) => {
    console.log(price);
    setOpen(false);
    try {
      const changePriceRes = await api.modifyPrice({ id, price });
      if (changePriceRes.status === 200) {
        console.log("change price success");
        setUpdate(update + 1);
      }
    } catch (error) {}
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Modify Price
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <ListItem>
            <ListItemText primary="The current price of this vehicle is " secondary={`$${price}`} />
          </ListItem>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         
          </DialogContentText>
          <Formik
            initialValues={initialValues}
            onSubmit={handleChange}
          >
            <Form>
            <Field
              as={TextField}
              autoFocus
              id="price"
              margin="dense"
              name="price"
              label="New Price"
              fullWidth
          />
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" autoFocus>
            Modify
          </Button>
              </DialogActions>
          </Form>
          </Formik>
        </DialogContent>
        
        
      </Dialog>
    </div>
  );
}

export default ManagePrice;
