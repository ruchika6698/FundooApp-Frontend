import React from "react";
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button } from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FundooService from '../Services/fundooService'
let service = new FundooService()

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showPassword: false,
      Username:"",
      Password:"",
      isValid: true,
      errors: {}
    }
  }
  validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!RegExp("^[_A-Za-z0-9-//+]+(//.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(//. [A-Za-z0-9]+)*(//.[A-Za-z]{2,})$").test(this.state.email)) {
            errors['email'] = '*Enter valid Email id'
        }
        if (!this.state.email) {
            errors['email'] = '*Enter the Email Id'
            formIsValid = false
        }
        if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the password'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    
  render() 
  {
    return (
    <Card className="loginbox" variant="outlined">
        <div className="loginfundoofont" align="center">
         <span class="f">F</span>
          <span class="u">u</span>
          <span class="n">n</span>
          <span class="d">d</span>
          <span class="o">o</span>
          <span class="oo">o</span>
        </div>
        <span class="signIn">Sign in</span>
        <br></br>
        <div className="usernameLogin">
            <TextField
                margin="dense"
                size="medium"
                name="email"
                id="outlined-required"
                label={ <div class="email">Email</div>}
                variant="outlined"
                style={{ width: "80%" }}
                inputProps={{style:{ fontSize:'16px'}}}
                onChange={this.handleChangeText}
                error={this.state.errors.email}
                helperText={this.state.errors.email}
            />
        </div>
        <br></br>
        <div className="passwordLogin">
            <TextField
                style={{ width: "80%" }}
                size="medium"
                margin="dense"
                id="outlined-adornment-password"
                variant="outlined"
                name="password"
                type="password"
                label={ <div class="password">Password</div>}
                onChange={this.handleChangeText}
                error={this.state.errors.password}
                helperText={this.state.errors.password}
                // inputProps={{style:{ fontSize:'16px'}}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sytle={{ width: "1px" }}>
                            <IconButton
                                onClick={
                                    () => this.setState({ showPassword: !this.state.showPassword })
                                }
                            >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                            )
                            }}
            />
        </div>
         <div className="Forgotpassword">
                <Button onClick={() => this.props.history.push('/forgotpassword')} style={{ textTransform: 'lowercase', color: '#0423ce',fontSize:'13px' }}>Forgot Password?</Button>
        </div>
        <div className="buttonLogin">
            <Button
                style={{ width:"150px",padding: "7px 0px",color:'#0423ce',fontSize:'15px'}}
                onClick={() => this.props.history.push('/register')}
            >
            Create account
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                onClick={this.submitUserSignInForm}
            >
            Login
            </Button>
        </div>
    </Card>
    );
  }
}