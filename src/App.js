import React, { Component } from 'react';
import "./CSS/register.css";
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { Login} from './Components/login'
import { Register} from './Components/register'
import { ForgotPassword} from './Components/forgotpassword'
import  Dashboard from './Components/dashboard'
import { ResetPassword} from './Components/resetpassword'
import { GetAllNotes} from './Components/getAllNotes'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/dashboard">
      {sessionStorage.getItem('Token') ?
        <Dashboard/>
          :
          <Redirect
            to={{
                pathname:"/",
                state:{from:'dashboard'}
            }}
        />} </Route>
      <Route path="/resetpassword/:token" component={ResetPassword} />
      <Route path="/dashboard/notes" component={GetAllNotes} />
      </Router>
      </div>
    );
  }
}
export default App;
