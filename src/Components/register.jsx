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

  render() 
  {
  return (
    <Card className="root" variant="outlined">
      <div className='fundoofont'>
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
            />                  
          </div>
          <div>
            <TextField
              className='username'
              variant='outlined'
              label='Username'
              margin='dense'
              style={{ width: "96%" }}
            />
            <h1 className='usermailline'>Use my current email address instead</h1>
            <div className='confirmPass'>
              <TextField
                className='pass'
                variant='outlined'
                label='Password'
                margin='dense'
                style={{ width: "48%" }}
              />
              <span>

              </span>
              <TextField
                className='cpassword'
                variant='outlined'
                label='Confirm'
                margin='dense'
                style={{ width: "48%" }}
              />
            </div>
              <h1 className='passline' >Use 8 or more characters with a mix of letters, numbers & symbols</h1>
              <div className="signbutton">
                  <Button href="#text-buttons" color="primary" >
                    Sign in instead
                  </Button>

                  <Button variant="contained" color="primary" >
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