import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper, Snackbar } from '@material-ui/core';
import { Field, Form, Formik, } from 'formik';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import {  TextField } from 'formik-material-ui';
import React, { useState } from 'react';
// import { mixed, number, object } from 'yup';
import ImageUploader from '../ImageUploader/ImageUploader';
import * as api from '../../../../../../Utils/api';
import './SellCarFrom.css';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function SellCarForm() {
  const history = useHistory();
  const [imgUrl, setImgUrl] = useState([])
    // const inputRef = React.useRef()

  return (
    <div className="sellCarForm-page">
      <header className="sellCarForm-header">
        <h1 className="sellCarForm-title">Sell my car</h1>
      </header>
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            title: '',
            price: '',
            kilometers: '',
            colour: '',
            body: '',
            engine: '',
            transmission: '',
            fuelConsumption: '',
            type: '',
            // imgUrl: null,
          }}
          onSubmit={async (values) => {
            await sleep(300);
            console.log('values', values);
            
            const title = values.title;
            const price = values.price;
            const kilometers = values.kilometers;
            const colour = values.colour;
            const body = values.body;
            const engine = values.engine;
            const transmission = values.engine;
            const fuelConsumption = values.fuelConsumption;
            const type = values.type;
            const ownerId = localStorage.getItem("userId");

            try {
              const sellCarRes =await api.addCarForSale({
                title,
                price,
                kilometers,
                colour,
                body,
                engine,
                transmission,
                fuelConsumption,
                type,
                ownerId,
              })
              if (sellCarRes.status === 200) {
                console.log("go");
                const id = sellCarRes.data.id;
                const path = `/dashboard-customer/dashboard/cars/${id}`;
                history.push(path);
              }
            } catch (error) {
              
            }
          }}
        >
          <FormikStep label="Vehicle Type">
            <Box paddingBottom={2}>
              <Field fullWidth name="type" component={TextField} label="Vehicle Type" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="title" component={TextField} label="Vehicle Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="price" component={TextField} label="Vehicle Price" />
            </Box>
            {/* <Box paddingBottom={2}>
              <Field
                fullWidth
                name="price"
                type="number"
                component={TextField}
                label="Price"
              />
            </Box> */}
          </FormikStep>
          <FormikStep
            label="Vehicle Details"
          >
            <Box paddingBottom={2}>
              <Field fullWidth name="kilometers" component={TextField} label="Kilometers" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="colour" component={TextField} label="Colour" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="body" component={TextField} label="Body" />
            </Box>
           
          </FormikStep>
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field fullWidth name="engine" component={TextField} label="Engine" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="transmission" component={TextField} label="Transmission" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="fuelConsumption" component={TextField} label="Fuel Consumption" />
            </Box>
          </FormikStep>
          <FormikStep label="Vehicle Image">
            <Box paddingBottom={2}>
              {/* <Field fullWidth name="imgUrl" type="file" component={TextField} label="Image" /> */}
              {/* <input 
                type="file" id="input"
                // onChange={ e => setFiles(e.target.value)}
                onChange={() => setFiles(inputRef.current.files[0])}
                ref={inputRef}
              /> */}
              <ImageUploader setImgUrl={setImgUrl} />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
    </div>
  );
}


export function FormikStep({ children }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
                onClick = {isSubmitting ? 'Submitting' : isLastStep() ? handleClick : ''  }
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center',}}
              >
                <Alert onClose={handleClose} severity="success">
                  Add Car Success!
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
