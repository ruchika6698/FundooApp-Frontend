import React from "react";
import "../CSS/register.css";
import account from "../Assets/account.svg";
import { TextField, Button, Snackbar, Hidden } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FundooService from "../Services/fundooService";
let service = new FundooService();

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
      service: "",
      snackbarOpen: false,
      snackbarMsg: "",
    };
  }
  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  snackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  submitUserSignInForm = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "First Name is required",
      });
    } else if (!/^[A-Z][a-zA-Z]{2,15}$/.test(this.state.firstName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "First Name is not in correct format",
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Last Name is required",
      });
    } else if (!/^[A-Z][a-zA-Z]{2,15}$/.test(this.state.lastName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Last Name is not in correct format",
      });
    } else if (this.state.email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Email is required",
      });
    } else if (
      !/^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$/.test(
        this.state.email
      )
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid Email address",
      });
    } else if (this.state.password === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Password is required",
      });
    } else if (
      !/^[a-zA-Z0-9]*[@#$&*_+-]{1}[a-zA-Z0-9]*$/.test(this.state.password)
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg:
          "Password should be minimum 8 digit and have to use atleast one characters and number",
      });
    } else {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        service: this.state.service,
      };
      service
        .Registration(user)
        .then((json) => {
          console.log("responce data==>", json);
          if (json.status === 200) {
            alert("Registration Sucessfull !!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Card className="root" variant="outlined">
        <div className="fundoofont" align="center">
          <span class="f">F</span>
          <span class="u">u</span>
          <span class="n">n</span>
          <span class="d">d</span>
          <span class="o">o</span>
          <span class="oo">o</span>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span class="Snackbar"> {this.state.snackbarMsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            ></IconButton>,
          ]}
        />
        <p className="text">Create your Fundoo Account</p>
        <p className="continue">Continue to Fundoo</p>
        <br />
        <div class="main">
          <div class="input">
            <div className="flname">
              <TextField
                fullWidth
                className="name"
                variant="outlined"
                name="firstName"
                id="firstName"
                label={<div class="name">First name</div>}
                margin="dense"
                size="medium"
                style={{ width: "48%" }}
                inputProps={{ style: { fontSize: "16px" } }}
                defaultValue={this.state.firstName}
                onChange={this.handleChangeText}
              />
              <span></span>
              <TextField
                fullWidth
                className="name"
                variant="outlined"
                name="lastName"
                id="lastName"
                label={<div class="name">Last name</div>}
                margin="dense"
                size="medium"
                style={{ width: "48%" }}
                inputProps={{ style: { fontSize: "16px" } }}
                defaultValue={this.state.lastName}
                onChange={this.handleChangeText}
              />
            </div>
            <br />
            <TextField
              fullWidth
              className="username"
              name="email"
              variant="outlined"
              id="outlined-required"
              label={<div class="email">Email</div>}
              margin="dense"
              inputProps={{ style: { fontSize: "16px" } }}
              defaultValue={this.state.email}
              onChange={this.handleChangeText}
            />
            <h1 className="usermailline">
              Use my current email address instead
            </h1>
            <br />
            <div className="flname">
              <TextField
                className="conPass"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                label={<div class="cpassword">Password</div>}
                margin="dense"
                style={{ width: "68%" }}
                inputProps={{ style: { fontSize: "16px" } }}
                defaultValue={this.state.password}
                onChange={this.handleChangeText}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sytle={{ width: "1px" }}>
                      <IconButton
                        onClick={() =>
                          this.setState({
                            showPassword: !this.state.showPassword,
                          })
                        }
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <span></span>
              <TextField
                className="conPass1"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                label={<div class="cpassword">Confirm Password</div>}
                margin="dense"
                style={{ width: "65%" }}
                defaultValue={this.state.confirmPassword}
                onChange={this.handleChangeText}
                inputProps={{ style: { fontSize: "16px" } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sytle={{ width: "1px" }}>
                      <IconButton
                        onClick={() =>
                          this.setState({
                            showPassword: !this.state.showPassword,
                          })
                        }
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <h1 className="passline">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </h1>
            <br />
            <div>
              <div className="service">
                <RadioGroup
                  aria-label="service"
                  name="service"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <h5>Service:</h5>
                  <div class="radio">
                    <FormControlLabel
                      value="basic"
                      id="service"
                      defaultValue={this.state.service}
                      onChange={this.handleChangeText}
                      control={<Radio color="primary" fontSize="17px" />}
                      label={<div class="password">Basic</div>}
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="advance"
                      defaultValue={this.state.service}
                      onChange={this.handleChangeText}
                      control={<Radio color="primary" fontSize="17px" />}
                      label={<div class="password">Advance</div>}
                    />
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="signbutton">
              <Button
                color="primary"
                style={{
                  width: "150px",
                  padding: "7px 0px",
                  color: "#0423ce",
                  fontSize: "13px",
                }}
                onClick={() => this.props.history.push("/")}
              >
                Sign in instead
              </Button>

              <Button
                variant="contained"
                style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
                color="primary"
                onClick={this.submitUserSignInForm}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="signimage">
            <Hidden smDown>
              <img src={account} alt="fundooo" width="244" height="244"></img>
              <figcaption className="figcaption">
                One account. All of Fundoo{" "}
              </figcaption>
              <figcaption className="figcaption">working for you.</figcaption>
            </Hidden>
          </div>
        </div>
      </Card>
    );
  }
}
export default Register;