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
                    label={ <div class="email">Email the Email Id</div>}
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