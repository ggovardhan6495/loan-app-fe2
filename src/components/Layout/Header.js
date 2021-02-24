import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-info mx-auto py-3">
              <a className="navbar-brand">Bank Management System</a>
              <form className="form-inline">
                <input className="form-control mr-sm-2 btn-primary" type="button" placeholder="Login" value={this.state.loggedIn ? 'Log Out' : 'Log In'} onClick={this.loginHandle.bind(this)} />
              </form>
            </nav>        
            )
    }
}


export default Header;
