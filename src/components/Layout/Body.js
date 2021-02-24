import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

class Body extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="text-center">Welcome to Loan Application App</h4>
                <div className="row py-4">
                    <div className="col-4 text-center">
                        <NavLink to="/homeloan" 
                            exact activeStyle={ {color:'green'} 
                            }><button className="btn btn-info col">Home Loan</button> </NavLink>
                    </div>
                    <div className="col-4 text-center">
                        <NavLink to="/eduloan" 
                            exact activeStyle={ {color:'green'} 
                            }><button className="btn btn-info col">Education Loan</button></NavLink>
                    </div>
                    <div className="col-4 text-center">
                        <NavLink to="/" 
                            exact activeStyle={ {color:'green'} 
                            }><button className="btn btn-info col">Edit User Details</button></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body