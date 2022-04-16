import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import FormContext from "../../../contexts/FormContext";
import useStyles from "../../../styles/styles";
import FormButtons from "../FormButtons/Index";
import { Formik } from "formik";
import { Persist } from "formik-persist";
import * as yup from "yup";
import InputMask from "react-input-mask";

const personalForm = () => {
  const { nextStep, formData, setFormData } = useContext(FormContext);
  const classes = useStyles();

  const validatorSchema = yup.object({
    firstName: yup.string().required().min(4),
    lastName: yup.string().required().min(4),
    gender: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        birthday: "",
      }}
      validationSchema={validatorSchema}
      onSubmit={(data) => {
        setFormData({ ...formData, ...data });
        nextStep();
      }}
      enableReinitialize
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              onChange={handleChange}
              name="firstName"
              label="First Name"
              value={values.firstName}
              helperText={errors.firstName}
              error={!!errors.firstName}
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              name="lastName"
              label="Last Name"
              value={values.lastName}
              helperText={errors.lastName}
              error={!!errors.lastName}
              margin="normal"
              fullWidth
            />
            <Box display="flex" justifyContent="space-between">
              <FormControl
                sx={{ flex: "1", marginRight: "1rem", textAlign: "left" }}
                margin="normal"
              >
                <InputLabel id="select-label">Gender</InputLabel>
                <Select
                  labelId="select-label"
                  id="demo-simple-select"
                  label="Gender"
                  onChange={handleChange}
                  name="gender"
                  value={values.gender}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ flex: "1" }}>
                <InputMask
                  mask="99/99/9999"
                  value={values.birthday}
                  onChange={handleChange}
                >
                  {() => (
                    <TextField
                      name="birthday"
                      label="Birthday"
                      helperText={errors.birthday}
                      error={!!errors.birthday}
                      margin="normal"
                      fullWidth
                    />
                  )}
                </InputMask>
              </FormControl>
            </Box>
          <FormButtons />
          <Persist name="personal-form" />
        </form>
      )}
    </Formik>
  );
};

export default personalForm;
