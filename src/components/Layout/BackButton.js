import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class BackButton extends Component {
    handleCancel(){
        this.props.history.push('/cancel');
    }

    render() {
        return (
          <div className=" col">
            <Link to="/cancel"><button className="btn btn-info disable float-right" onClick={this.handleChange}>Back</button></Link>
          </div>                  
    )
    }
}
