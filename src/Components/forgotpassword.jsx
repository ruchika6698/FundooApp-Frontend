import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import "../CSS/login.css";
import IconButton from "@material-ui/core/IconButton";
import { TextField, Button ,Snackbar} from '@material-ui/core'
import FundooService from '../Services/fundooService'
let service = new FundooService()


export class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            snackbarOpen: false,
            snackbarMsg: "",
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
   submit = () => {
      if (this.state.email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Email is Required"
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid email..!"
      });
    } else {
      //navigate to controller
      const user = {
        email: this.state.email
      };
      service.ForgotPassword(user).then((json)=>{
            console.log("responce data==>",json);
            if(json.status===200){  
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Request send successfully..!"
             }); 
        }
        }).catch((err)=>{
            console.log(err);
        })
        // this.props.history.push("/dashboard");
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
            <span class="signIn">Find your email</span>
            <span class="signIn">Enter your recovery email</span>
            <br/>
            <div className="usernameLogin">
                <TextField id="outlined-required" 
                    margin="dense"
                    size="small"
                    label={ <div class="email">Email</div>}
                    type="search"
                    variant="outlined"
                    name="email"
                    style={{ width: "80%" }}
                    onChange={this.handleChangeText}
                    value={this.state.email}
                    inputProps={{style:{ fontSize:'20px',height:'40%'}}}
                />
            </div>
            <div className="submit">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                    onClick={this.submit}
                >
                Submit
                </Button>
                <Button className="cancel"
                    variant="contained"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}}
                    color="primary" 
                    onClick={() => this.props.history.push('/')}>
                    Cancel
                </Button>
            </div>
        </Card>
        );
    }
}