import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button } from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            password: "",
            confirmpassword: "",
            isvalid: true,
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
        if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the Password'
            formIsValid = false
        }
        if (!this.state.confirmpassword) {
            errors['confirmpassword'] = '*Confirm Your Password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmpassword) {
            errors['confirmpassword'] = '*Password doesn\'t match'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }
    handleresetpasswordChange = () => {
        if (this.validateForm()) {
            let array = {};

            array.password = this.state.password;
            array.confirmpassword = this.state.confirmpassword;

        }
    };

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
            <span class="signIn">Enter new Password</span>
            <br/>
            <div className="passwordLogin">
                <TextField
                    style={{ width: "80%" }}
                    size="medium"
                    margin="dense"
                    id="outlined-adornment-password"
                    variant="outlined"
                    name="password"
                    inputProps={{style:{ fontSize:'16px'}}}
                    type={this.state.showPassword ? "text" : "password"}
                    label={ <div class="password">Password</div>}
                    margin="dense"
                    onChange={this.handleChangeText}
                    error={this.state.errors.password}
                    helperText={this.state.errors.password}
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
                        <br/>
                        <div className="passwordLogin">
                            <TextField
                                style={{ width: "80%" }}
                                inputProps={{style:{ fontSize:'16px'}}}
                                size="medium"
                                margin="dense"
                                id="outlined-adornment-password"
                                variant="outlined"
                                name="password"
                                type={this.state.showPassword ? "text" : "password"}
                                label={ <div class="confirmPass">Confirm Password</div>}
                                value={this.state.confirmPassword}
                                onChange={this.handleChangeText}
                                error={this.state.errors.confirmpassword}
                                helperText={this.state.errors.confirmpassword}
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