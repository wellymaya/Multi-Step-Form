import { Box, Button } from "@mui/material";
import { useContext } from "react";
import FormContext from "../../../contexts/FormContext";
import useStyles from "../../../styles/styles";

function FormButtons() {
  const { previousStep, currentStep } = useContext(FormContext);
  const classes = useStyles();

  return (
    <>
      {currentStep == 0 ? (
        <Box className={classes.button}>
          <Button
            onClick={previousStep}
            variant="contained"
            color="primary"
            size="large"
            className={classes.hideButton}
          >
            Previous
          </Button>
          <Button type="submit" variant="contained" size="large">
            Next
          </Button>
        </Box>
      ) : currentStep === 2 ? (
        <Box className={classes.button}>
          <Button
            onClick={previousStep}
            variant="contained"
            color="primary"
            size="large"
            className=""
          >
            Previous
          </Button>
          <Button type="submit" variant="contained" size="large">
            Finish
          </Button>
        </Box>
      ) : (
        <Box className={classes.button}>
          <Button
            onClick={previousStep}
            variant="contained"
            color="primary"
            size="large"
          >
            Previous
          </Button>
          <Button type="submit" variant="contained" size="large">
            Next
          </Button>
        </Box>
      )}
    </>
  );
}

export default FormButtons;
