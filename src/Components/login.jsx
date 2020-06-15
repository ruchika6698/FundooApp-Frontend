import React from "react";
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button } from '@material-ui/core'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showPassword: false,
      Username:'',
      Password:'',
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
          <span style={{ color: '#4285F4' }}>F</span>
          <span style={{ color: '#DB4437' }}>u</span>
          <span style={{ color: '#F4B400' }}>n</span>
          <span style={{ color: '#4285F4' }}>d</span>
          <span style={{ color: '#0F9D58' }}>o</span>
          <span style={{ color: '#DB4437' }}>o</span>
        </div>
        <span class="signIn">Sign in</span>
        <br></br>
        <div className="usernameLogin">
            <TextField
                margin="dense"
                size="medium"
                name="email"
                id="outlined-required"
                label="username"
                variant="outlined"
                style={{ width: "80%" }}
                inputProps={{style:{ fontSize:'16px'}}}
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
                label="password"
                inputProps={{style:{ fontSize:'16px'}}}
            />
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
            >
            Login
            </Button>
        </div>
        <div className="Forgotpassword">
                <Button onClick={() => this.props.history.push('/forgotpassword')} style={{ textTransform: 'lowercase', color: '#0423ce',fontSize:'13px' }}>Forgot Password?</Button>
        </div>
    </Card>
    );
  }
}