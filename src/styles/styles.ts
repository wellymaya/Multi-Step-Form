import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    Width: "100vw",
    minHeight: "100vh",
    display: "flex",
  },
  Box: {
    display: "flex",
    color: "lighGray",
    textAlign:'center',
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",

    backgroundColor: "#ffffff",
    width: "55vw",
    height: "700px",
    maxWidth: "1100px", 
    margin: "6rem auto",

    borderRadius: "5px",
    boxShadow: "2px 2px #a8a0af",
  },

  form: {
    marginTop: '1rem',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "50%",
    marginBottom: "5rem",
    width: "75%",
  },
  button: {
    display: "flex",
    marginTop: '2rem',
    justifyContent: "space-between",
  },
  hideButton: {
    visibility: "hidden",
  },
  sucessBox: {

  },
  sucessTitle: {
    color: '#0fab65',
    fontWeight: 'bold'
  }
});

export default useStyles;
