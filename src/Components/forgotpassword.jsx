import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button } from '@material-ui/core'

export class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            email: "",
            errors: {},
        };
    }

    handleChangeText = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, '------>name'))
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
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    render() {
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
            <span class="signIn">Find your email</span>
            <span class="signIn">Enter your recovery email</span>
            <br/>
            <div className="usernameLogin">
                <TextField id="outlined-required" 
                    margin="dense"
                    size="small"
                    label="Enter the Email id"
                    type="search"
                    variant="outlined"
                    name="email"
                    style={{ width: "80%" }}
                    inputProps={{style:{ fontSize:'20px',height:'40%'}}}
                />
            <br /><br />
            </div>
            <div className="buttonLogin">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                >
                Submit
                </Button>
                <Button variant="contained" 
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                    color="primary" onClick={() => this.props.history.push('/')}>
                    Cancel
                </Button>
            </div>
        </Card>
        );
    }
}