import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import FormContext from "../../contexts/FormContext";
import useStyles from "../../styles/styles";
import FormStepper from "../../components/Form/FormStepper";
import PersonalForm from "../../components/Form/PersonalForm";
import LoginForm from "../../components/Form/LoginForm";
import ContactForm from "../../components/Form/ContactForm";

const Form = () => {
  const { currentStep } = useContext(FormContext);
  const classes = useStyles();
  return (
    <Box className={classes.Box}>
      <Typography variant="h4" color="#616161">
        Sign Up
      </Typography>
      <FormStepper />
      {currentStep === 0 && <PersonalForm />}
      {currentStep === 1 && <ContactForm />}
      {currentStep === 2 && <LoginForm />}
    </Box>
  );
};

export default Form;
