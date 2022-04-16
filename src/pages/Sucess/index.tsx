import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../../styles/styles";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Sucess() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <Box className={classes.Box}>
          <CircularProgress size={55} />
        </Box>
      ) : (
        <Box className={classes.Box}>
          <Typography className={classes.sucessTitle} variant="h4">
            Registration Sucess!
          </Typography>
          <MdOutlineDone size={80} className={classes.sucessTitle} />
          <Typography marginBottom="5rem" color="#616161">
            Your account has been created. <br />
            Please check yout inbox to activate your account.
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Sucess;
