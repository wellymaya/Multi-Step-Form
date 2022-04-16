import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useContext } from "react";
import FormContext from "../../../contexts/FormContext";

function FormStepper() {
  const { currentStep } = useContext(FormContext);

  const steps = ["Personal", "Contact", "Login",];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default FormStepper;