import React, { Component } from 'react';
import "./CSS/register.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Login} from './Components/login'
import { Register} from './Components/register'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      
      {/* <Route exact path="/" component={Login} /> */}
      <Route path="/register" component={Register} />
       
      </Router>
      </div>
    );
  }
}
export default App;
