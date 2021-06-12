import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
// import { mixed, number, object } from 'yup';
import ImageUploader from '../ImageUploader/ImageUploader';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  const [imgUrl, setImgUrl] = useState([])
    // const inputRef = React.useRef()

  return (
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
            console.log(imgUrl);
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
              <Field
                fullWidth
                name="price"
                type="number"
                component={TextField}
                label="Price"
              />
            </Box>
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

          // the next line was not covered in the youtube video
          //
          // If you have multiple fields on the same step
          // we will see they show the validation error all at the same time after the first step!
          //
          // If you want to keep that behaviour, then, comment the next line :)
          // If you want the second/third/fourth/etc steps with the same behaviour
          //    as the first step regarding validation errors, then the next line is for you! =)
          //
          // In the example of the video, it doesn't make any difference, because we only
          //    have one field with validation in the second step :)
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
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
