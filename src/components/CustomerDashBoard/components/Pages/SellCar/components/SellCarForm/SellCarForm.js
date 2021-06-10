// import React from 'react';
// import {
//   Button,
//   Grid,
//   TextField,
//   Typography,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
// } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Form, Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import {
//   Link,
//   // useHistory
// } from 'react-router-dom';
// import './SellCarForm.css';
// import * as api from '../../../../../../Utils/api';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const SellCarForm = () => {
//   const classes = useStyles();
//   // const history = useHistory();

//   const initialValues = {
//     title: '',
//     price: '',
//     kilometers: '',
//     colour: '',
//     body: '',
//     engine: '',
//     transmission: '',
//     fuelConsumption: '',
//     type: '',
//   };
//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required(),
//     price: '',
//     kilometers: '',
//     colour: '',
//     body: '',
//     engine: '',
//     transmission: '',
//     fuelConsumption: '',
//     type: '',
//   });
//   const onSubmit = async ({ title, price, kilometers, colour, body, engine, transmission, fuelConsumption, type }) => {
//     console.log({ title, price, kilometers, colour, body, engine, transmission, fuelConsumption, type });
//     try {
//       const ownerId = localStorage.getItem("userId");
//       const addCarRes = await api.login({ title, price, kilometers, colour, body, engine, transmission, fuelConsumption, type, ownerId});
//       if (addCarRes.status === 200) {

//       }
//     } catch (error) {
//       if (error.response.status === 400) {
        
//       }
//       if (error.response.status === 404) {
       
//       }
//     }
//   };
//   return (
//     <div className="sellCar_form">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field
//               as={TextField}
//               label="Vehicle Name"
//               name="title"
//               variant="outlined"
//               margin="title"
//               fullWidth
//               id="title"
//               autoFocus
//               autoComplete="title"
//               helperText={(
//                 <ErrorMessage name="title">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Price"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="price"
//               type="price"
//               name="price"
//               autoComplete="current-price"
//               helperText={(
//                 <ErrorMessage name="price">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Kilometers"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="kilometers"
//               type="kilometers"
//               name="kilometers"
//               autoComplete="current-kilometers"
//               helperText={(
//                 <ErrorMessage name="kilometers">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Colour"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="colour"
//               type="colour"
//               name="colour"
//               autoComplete="current-colour"
//               helperText={(
//                 <ErrorMessage name="colour">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Body"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="body"
//               type="body"
//               name="body"
//               autoComplete="current-body"
//               helperText={(
//                 <ErrorMessage name="body">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Engine"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="engine"
//               type="engine"
//               name="engine"
//               autoComplete="current-engine"
//               helperText={(
//                 <ErrorMessage name="engine">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Transmission"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="transmission"
//               type="transmission"
//               name="transmission"
//               autoComplete="current-transmission"
//               helperText={(
//                 <ErrorMessage name="transmission">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <Field
//               as={TextField}
//               label="Fuel Consumption"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="fuelConsumption"
//               type="fuelConsumption"
//               name="fuelConsumption"
//               autoComplete="current-fuelConsumption"
//               helperText={(
//                 <ErrorMessage name="fuelConsumption">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             />
//             <FormControl variant="filled" className={classes.formControl}>
//             <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
//             <Field
//               as={Select}
//               label="price"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="price"
//               type="price"
//               name="price"
//               autoComplete="current-price"
//               helperText={(
//                 <ErrorMessage name="price">
//                   { (msg) => <span className="errorMessage">{msg}</span>}
//                 </ErrorMessage>
//               )}
//             >
//               <MenuItem value="SUV">SUV</MenuItem>
//               <MenuItem value="SEDAN">SEDAN</MenuItem>
//               <MenuItem value="WAGON">WAGON</MenuItem>
//               <MenuItem value="HATCH">HATCH</MenuItem>
//               <MenuItem value="UTE">UTE</MenuItem>
//               <MenuItem value="CONVERTIBLE">CONVERTIBLE</MenuItem>
//               </Field>
//             </FormControl>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               disabled={isSubmitting}
//               className="sell-btn"
//             >
//               Add
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SellCarForm;
