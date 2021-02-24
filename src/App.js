import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeLoanPage from './components/HomeLoan/HomeLoanPage';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from "./store";
import EducationLoanPage from './components/EducationLoan/EducationLoanPage';

class App extends Component {
  
  render() {
    return ( 
      <Provider store={store}>
        <Router>
          <div>
            <nav className="navbar navbar-light bg-info mx-auto py-3">
              <a className="navbar-brand">Bank Management System</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2 btn-primary" type="button" placeholder="Login" value="Log In" onClick="" />
              </form>
            </nav>
            <div className="body py-3">
              <Switch>
                <Route exact path="/" component={Body} />
                <Route exact path="/homeloan" component={HomeLoanPage} />
                <Route exact path="/eduloan" component={EducationLoanPage} />
                <Route exact path="/cancel" component={Body} />
              </Switch>
            </div>
            <Footer />
          </div>  
        </Router>
      </Provider>
    );
    }
  } 

export default App;