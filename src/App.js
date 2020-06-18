import React, { Component } from 'react';
import "./CSS/register.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login} from './Components/login'
import { Register} from './Components/register'
import { ForgotPassword} from './Components/forgotpassword'
import  Dashboard from './Components/dashboard'
import { ResetPassword} from './Components/resetpassword'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/resetpassword/:token" component={ResetPassword} />
       
      </Router>
      </div>
    );
  }
}
export default App;
