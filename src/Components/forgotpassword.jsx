import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button } from '@material-ui/core'

export class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errors: {},
            isValid: true
        };
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
    submit = () => {
        if (this.validateForm()) {
            let user = {};
            user.email = this.state.email;
        //     userLogin(user)
        //         .then(Response => {
        //             console.log('data', Response.data.data);

        //             localStorage.setItem("FirstName", Response.data.userData.firstName)
        //             localStorage.setItem("LastName", Response.data.userData.lastName)
        //             localStorage.setItem("Email", Response.data.userData.email)
        //             localStorage.setItem("Token", Response.data.data)

        //             console.log("Res", Response)
        //             alert(`Login Successfull!!`);
        //             this.props.history.push("/dashboard");

        //         })
        //         .catch(err => {
        //             console.log(Response, "User login fail");
        //             alert(err);
        //         });
        }
    }
    render() {
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
            <span class="signIn">Find your email</span>
            <span class="signIn">Enter your recovery email</span>
            <br/>
            <div className="usernameLogin">
                <TextField id="outlined-required" 
                    margin="dense"
                    size="small"
                    label={ <div class="email">Enter the Email Id</div>}
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
                    onClick={this.submit}
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