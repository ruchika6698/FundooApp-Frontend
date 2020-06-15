import React from "react";
import "../CSS/register.css";
import account from "../Assets/account.svg";
import { TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showPassword: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
      errors: {},
    }
  } 

  validateForm = () => {
        let errors = {}
        let formIsValid = true
        if (!this.state.firstName) {
            errors['firstName'] = '*Enter the First Name'
            formIsValid = false
        }
        if (!this.state.lastName) {
            errors['lastName'] = '*Enter the Last Name'
            formIsValid = false
        }
        if (!RegExp("^[_A-Za-z0-9-//+]+(//.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(//.[A-Za-z]{2,})$").test(this.state.email)) {
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
        if (!this.state.confirmPassword) {
            errors['confirmPassword'] = '*Enter the confirm password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmPassword) {
            errors['confirmPassword'] = '*Password doesn\'t match'
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
    <Card className="root" variant="outlined">
      <div className='fundoofont' align="center">
          <span style={{ color: '#4285F4' }}>F</span>
          <span style={{ color: '#DB4437' }}>u</span>
          <span style={{ color: '#F4B400' }}>n</span>
          <span style={{ color: '#4285F4' }}>d</span>
          <span style={{ color: '#0F9D58' }}>o</span>
          <span style={{ color: '#DB4437' }}>o</span>
      </div>
      <p className='text'>Create your Fundoo Account</p>
      <p className='continue'>Continue to Fundoo</p>
      <div class="main">
        <div class="input">
          <div className='flname'>
            <TextField
              classname='firstname'
              variant='outlined'
              label='First name'
              margin="dense"
              size="medium"
              style={{ width: "48%" }}
              inputProps={{style:{ fontSize:'16px'}}}
            />
            <span>


            </span>
            <TextField
              className='lastname'
              variant='outlined'
              label='Last name'
              margin="dense"
              size="medium"
              style={{ width: "48%" }}
              inputProps={{style:{ fontSize:'16px'}}}
            />                  
          </div>
          <br/>
          <div>
            <TextField
              className='username'
              variant='outlined'
              label='Username'
              margin='dense'
              style={{ width: "96%" }}
              inputProps={{style:{ fontSize:'16px'}}}
            />
            <h1 className='usermailline'>Use my current email address instead</h1>
            <div className='confirmPass'>
              <TextField
                className='pass'
                type='password'
                variant='outlined'
                label='Password'
                margin='dense'
                style={{ width: "48%" }}
                inputProps={{style:{ fontSize:'16px'}}}
              />
              <span>

              </span>
              <TextField
                className='cpassword'
                type='password'
                variant='outlined'
                label='Confirm'
                margin='dense'
                style={{ width: "48%" }}
                inputProps={{style:{ fontSize:'16px'}}}
              />
            </div>
              <h1 className='passline' >Use 8 or more characters with a mix of letters, numbers & symbols</h1>
              <div className="signbutton">
                  <Button color="primary"
                    style={{ width:"150px",padding: "7px 0px",color:'#0423ce',fontSize:'13px'}} 
                    onClick={() => this.props.history.push('/')}>
                    Sign in instead
                  </Button>

                  <Button variant="contained"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}} 
                    color="primary" >
                    Submit
                  </Button>
              </div>
          </div>
        </div>
        <div>
            <img src={account} className='signimage' alt='fundooo'
                  width="244" height="244" ></img>
                <figcaption className='figcaption'>One account. All of Google </figcaption>
                <figcaption className='figcaption'>working for you.</figcaption>
            </div>
      </div>

    </Card>
    );
  }
}