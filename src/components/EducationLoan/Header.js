import React, { Component } from 'react'
import BackButton from '../Layout/BackButton';

export default class Header extends Component {

    handleCancel(){
        this.props.history.push('/cancel');
    }

    render() {
        return (
            <div className="row pb-4">
              <div className=" col">
                <h4 className="text-left">Education Loan Form</h4>
              </div>
              <BackButton />      
            </div>
        )
    }
}
