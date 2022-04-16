import { FormControl, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { useContext } from "react";
import FormContext from "../../../contexts/FormContext";
import useStyles from "../../../styles/styles";
import FormButtons from "../FormButtons/Index";
import * as yup from "yup";
import { Persist } from "formik-persist";
import InputMask from "react-input-mask";

const ContactForm = () => {
  const classes = useStyles();
  const { formData, setFormData, nextStep } = useContext(FormContext);

  const validationSchema = yup.object({
    adress: yup.string().required().min(5),
    country: yup.string().required().min(4),
    phoneNumber: yup.string().min(11),
  });

  return (
    <Formik
      initialValues={{
        adress: "",
        country: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        setFormData({ ...formData, ...data });
        nextStep();
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              onChange={handleChange}
              name="adress"
              label="Enter your adress *"
              value={values.adress}
              helperText={errors.adress}
              error={!!errors.adress}
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              name="country"
              label="Country *"
              value={values.country}
              helperText={errors.country}
              error={!!errors.country}
              margin="normal"
              fullWidth
            />

            <FormControl fullWidth>
              <InputMask
                mask="(99) 99999-9999"
                value={values.phoneNumber}
                onChange={handleChange}
              >
                {() => (
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    helperText={errors.phoneNumber}
                    error={!!errors.phoneNumber}
                    margin="normal"
                    fullWidth
                  />
                )}
              </InputMask>
            </FormControl>
          <FormButtons />
          <Persist name="adress-form" />
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
