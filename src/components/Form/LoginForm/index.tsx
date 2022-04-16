import { Grid, TextField } from "@mui/material";
import { useContext } from "react";
import FormContext from "../../../contexts/FormContext";
import useStyles from "../../../styles/styles";
import FormButtons from "../FormButtons/Index";
import * as yup from "yup";
import { Formik } from "formik";
import api from "../../../services/api";
import { Persist } from "formik-persist";

function PersonalForm() {
  const classes = useStyles();

  const { formData, setFormData, setSuccessfulRegister } =
    useContext(FormContext);

  const validateSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validateSchema}
      onSubmit={ (data) => {
        setFormData({ ...formData, ...data });

        api.post("/user", { formData }).then((response) => {
          console.log(response);
          setSuccessfulRegister(true);
        });
      }}
    >
      {({ handleChange, handleSubmit, errors, values }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              onChange={handleChange}
              name="email"
              label="Email"
              value={values.email}
              helperText={errors.email}
              error={!!errors.email}
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              name="password"
              type="password"
              label="Password"
              value={values.password}
              helperText={errors.password}
              error={!!errors.password}
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              value={values.confirmPassword}
              helperText={errors.confirmPassword}
              error={!!errors.confirmPassword}
              margin="normal"
              fullWidth
            />
          <FormButtons />
          <Persist name="login-form" />
        </form>
      )}
    </Formik>
  );
}

export default PersonalForm;
