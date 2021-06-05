import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { UserAction } from "../../../redux/actions";

const RegisterForm = (props) => {
  const [steps, setSteps] = useState(2);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (props.regResponse) {
      setSteps(0);
      props.onSubmit();
    } else {
      !email && setEmail(props.email);
      console.log(props.currentStep);
      setSteps(props.currentStep);
    }
  }, [props.regResponse, props.currentStep]);

  const setFormEvent = (e) => {
    switch (steps) {
      case 2:
        setFullName(e.target.value);
        break;
      case 3:
        setContact(e.target.value);
        break;
      case 4:
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const register = () => {
    const nameString = fullname.split(" ");
    const body = {
      email: email,
      password: password,
      user_details: {
        first_name: nameString[0],
        last_name: nameString[1],
        contact_number: contact,
      },
    };
    props.register(body);
  };

  const viewChange = (currentSteps) => {
    props.viewChange(currentSteps + 1);
    setSteps(currentSteps + 1);
  };

  const formFields = (title, value, currentSteps, type) => {
    return (
      <>
        <Typography
          variant="h5"
          color="initial"
          style={{ marginTop: "15px ", fontWidth: "700" }}
        >
          Enter your {title}
        </Typography>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <div style={{ margin: "30px 0" }}>
            <TextField
              id={title.replace(" ", "")}
              name={title.replace(" ", "")}
              type={type}
              max={type === "number" ? 10 : 9999}
              placeholder={`Enter your ${title}`}
              variant="outlined"
              value={value}
              onChange={(e) => setFormEvent(e)}
              fullWidth
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: "15px 0", fontSize: "16px" }}
              onClick={() =>
                currentSteps === 4 ? register() : viewChange(currentSteps)
              }
            >
              {currentSteps === 4 ? "Create Account" : "Next"}
            </Button>
          </div>
        </div>
      </>
    );
  };

  const showSteps = () => {
    switch (steps) {
      case 2:
        props.setView(2 - 1);
        return formFields("full name", fullname, 2, "text");
      case 3:
        props.setView(3 - 1);
        return formFields("contact number", contact, 3, "number");
      case 4:
        props.setView(4 - 1);
        return formFields("password", password, 4, "password");
      default:
        break;
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={props.logo}
          alt="register page"
          style={{ width: "20%", margin: "0 auto" }}
        />
        {showSteps()}
      </div>
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    regResponse: userReducer.regResponse,
  };
};

const mapDispatchToProps = {
  register: (body) => UserAction.registerAction(body),
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
