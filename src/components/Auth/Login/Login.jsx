import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import LoginCarousel from "./LoginCarousel";
import facebookIcon from "../../../assets/login/facebook.png";
import googleIcon from "../../../assets/login/google.png";
import logo from "../../../assets/images/Islamic ad.png";
import "./Login.scss";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import RegisterDailog from "./RegisterDailog";
import RegisterForm from "../Registration/Register";
import { UserAction } from "../../../redux/actions";
import { connect } from "react-redux";
import { FormHelperText } from "@material-ui/core";
import { StayCurrentLandscape } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [showReg, setRegForm] = useState(false);
  const [password, setPassword] = useState("");
  const [currentStep, setStep] = useState(2);
  const [prevStep, setPrevStep] = useState(0);

  useEffect(() => {
    if (props.loginStatus) {
      handleClose();
    }
  }, [props.loginStatus]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setEmail("");
    setOpen(false);
    setRegForm(false);
    setRegister(false);
    setStep(0);
  };

  const registerEvent = (event) => {
    setRegForm(event);
    if (event) {
      setStep(2);
      setPrevStep(1);
    } else {
      setStep(1);
      setPrevStep(0);
    }
  };

  const changeEvent = (e, type) => {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  };

  const loginSubmit = () => {
    const body = {
      email: email,
      password: password,
    };
    props.loginUser(body);
  };

  const errorHandler = (error) => {
    return <FormHelperText error="true">{error}</FormHelperText>;
  };

  const handleBack = () => {
    console.log(currentStep, prevStep);

    if (!prevStep) {
      setRegister(false);
    } else if (prevStep === 1) {
      setRegForm(false);
      setPrevStep(0);
    } else {
      setStep(prevStep);
    }
  };

  const prevView = (step) => {
    setPrevStep(step);
  };

  const viewChange = (currentView) => {
    setStep(currentView);
  };

  const loginCode = (
    <>
      <div>
        <LoginCarousel />
      </div>

      <div>
        <div className="LoginInput_wrapper">
          <TextField
            variant="outlined"
            placeholder="Enter your Email address here"
            onChange={(e) => changeEvent(e, "email")}
            fullWidth
            type="email"
            name="phone"
            value={email}
            className="adsInput"
          />
        </div>

        <div className="LoginInput_wrapper">
          <TextField
            variant="outlined"
            placeholder="Enter your password here"
            onChange={(e) => changeEvent(e, "password")}
            fullWidth
            type="password"
            name="password"
            value={password}
            className="adsInput"
          />
          {errorHandler(props.loginError)}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginSubmit()}
            className="loginButton"
          >
            Login
          </Button>
        </div>
      </div>

      <div className="login_wrapper">
        <Button variant="outlined" color="default" className="google_Button">
          <span>
            <img src={facebookIcon} alt="facebook" />
          </span>
          Facebook
        </Button>
        <Button
          variant="outlined"
          color="default"
          style={{ marginLeft: "6px" }}
          className="facebook_Button"
        >
          <span>
            <img src={googleIcon} alt="facebook" />
          </span>
          Google
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h4>or</h4>
        <Button
          variant="text"
          color="primary"
          onClick={() => setRegister(true)}
        >
          Login with Email
        </Button>
      </div>
      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <Typography variant="subtitle1">
          We won't share your personal details with anyone
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginTop: "10px", color: "#002f34a3" }}
        >
          If you continue, you are accepting
          <Link to="/" style={{ margin: "0 6px" }}>
            Terms and Conditions
          </Link>
          and
          <Link to="/" style={{ marginLeft: "6px" }}>
            Privacy Policy
          </Link>
        </Typography>
      </div>
    </>
  );

  const registerCode = (
    <>
      {showReg ? (
        <RegisterForm
          email={email}
          logo={logo}
          onSubmit={handleClose}
          setView={prevView}
          currentStep={currentStep}
          viewChange={viewChange}
        />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="register page"
              style={{ width: "20%", margin: "0 auto" }}
            />
            <Typography
              variant="h5"
              color="initial"
              style={{ marginTop: "15px ", fontWidth: "700" }}
            >
              Enter your email to login
            </Typography>
          </div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div style={{ margin: "30px 0" }}>
              <TextField
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <Typography
                variant="subtitle1"
                color="initial"
                style={{ margin: "15px", textAlign: "center" }}
              >
                If you are a new user please select any other login option from
                previous page
              </Typography>
              <RegisterDailog email={email} clickEvent={registerEvent} />
            </div>
            <div>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ margin: "15px", textAlign: "center" }}
              >
                We won't reveal your email to anyone else nor use it to send you
                spam
              </Typography>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <div>
      <p variant="text" color="primary" onClick={handleClickOpen}>
        Login
      </p>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {!register ? (
            <>
              <Typography
                variant="h6"
                style={{ color: "#002f34", fontWeight: "700" }}
              >
                User Login
              </Typography>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleBack()}
              >
                <KeyboardBackspaceIcon />
              </Button>
            </>
          )}
        </DialogTitle>
        <DialogContent dividers>
          {!register ? <> {loginCode} </> : <> {registerCode} </>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    loginStatus: userReducer.loginResponse,
    loginError: userReducer.errorMessage,
  };
};

const mapDispatchToProps = {
  loginUser: (body) => UserAction.loginAction(body),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
