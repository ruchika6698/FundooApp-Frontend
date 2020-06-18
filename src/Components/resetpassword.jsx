import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import { TextField, Button ,Snackbar} from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FundooService from '../Services/fundooService'
let service = new FundooService()

export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            newPassword: "",
            confirmpassword: ""
        };
    }
    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    snackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };

   reset = () => {
      if (this.state.newPassword === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Password is Required"
      });
    }  else {
      //navigate to controller
      let token=this.props.match.params.token;
      const user = {
        newPassword: this.state.newPassword
      };
      service.Resetpassword(token, user).then((json)=>{
            console.log("responce data==>",json);
            if(json.status===204){  
            alert('Password reset Sucessfull !!');  
        }
        }).catch((err)=>{
            console.log(err);
        })
         this.props.history.push("/");
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
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={this.state.snackbarOpen}
              autoHideDuration={6000}
              onClose={this.snackbarClose}
              message={<span class="Snackbar">{this.state.snackbarMsg}</span>}
              action={
                <IconButton
                  key="close"
                  arial-label="close"
                  color="inherit"
                  onClick={this.snackbarClose}
                ></IconButton>
              }
            />
            <span class="signIn">Enter new Password</span>
            <br/>
            <div className="passwordLogin">
                <TextField
                    style={{ width: "80%" }}
                    size="medium"
                    margin="dense"
                    id="outlined-adornment-password"
                    variant="outlined"
                    name="newPassword"
                    inputProps={{style:{ fontSize:'16px'}}}
                    type={this.state.showPassword ? "text" : "password"}
                    label={ <div class="password">New Password</div>}
                    margin="dense"
                    onChange={this.handleChangeText}
                    value={this.state.newPassword}
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
            <div className="submit">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                    onClick={this.reset}
                >
                Submit
                </Button>
                <Button className="cancel"
                    variant="contained" 
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                    color="primary" onClick={() => this.props.history.push('/')}>
                    Cancel
                </Button>
            </div>
        </Card>
        );
    }
}