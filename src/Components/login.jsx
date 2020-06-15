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
                onClick={() => this.props.history.push('/dashboard')}
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