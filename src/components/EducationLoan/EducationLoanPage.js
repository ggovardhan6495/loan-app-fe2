import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { applyEducationLoan } from "../../actions/educationLoanAction";
import Header from './Header';

class Educationloanpage extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // const URL = 'http://localhost:9002/eloan/v1/apply'
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["cFee"] = "";
            input["cName"] = "";
            input["fName"] = "";
            input["fOcup"] = "";
            input["ftotExp"] = "";
            input["fcurExp"] = "";
            input["rtcNo"] = "";
            input["anInc"] = "";
            this.setState({input:input});
            
            console.log(input);
            alert('Your request is submited');
        }

        this.props.applyEducationLoan(this.state.input);
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["cFee"]) {
            isValid = false;
            errors["cFee"] = "Please enter your course fee.";
        }
        if (!input["cName"]) {
            isValid = false;
            errors["cName"] = "Please enter your course name.";
          }
        if (!input["fName"]) {
            isValid = false;
            errors["fName"] = "Please enter your father occupation.";
        }  
        if (!input["fOcup"]) {
            isValid = false;
            errors["fOcup"] = "Please enter your father occupation.";
        }
        if (!input["ftotExp"]) {
            isValid = false;
            errors["ftotExp"] = "Please enter your father's total experience.";
        }

        if (!input["fcurExp"]) {
            isValid = false;
            errors["fcurExp"] = "Please enter your father's exp with current company.";
          }
        if (!input["rtcNo"]) {
            isValid = false;
            errors["rtcNo"] = "Please enter your Ration Card No.";
          }
        if(typeof["rtcNo"] !== "undefined") {
            if(!input["rtcNo"].match(/^[A-Z][0-9]$/)){
              isValid=false;
              errors["rtcNo"] = "Please enter Valid RationCardNo."
            }

        }

        if (!input["anInc"]) {
            isValid = false;
            errors["anInc"] = "Please enter your Annual Income.";
          }

          this.setState({
            errors: errors
          });

          return isValid;
    }

    handleCancel(){
        this.props.history.push('/cancel');
    }


    render () {
        
        return(
            <div className="container bg-grey">
                <form onSubmit={this.handleSubmit}><br /><br />
                  <Header />
                    <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="cName">Course :</label>
                        <input 
                            type="text"
                            name="cName"
                            value={this.state.input.cName}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Course Name"
                            id="cName" />
                            <div className="text-danger">{this.state.errors.cName}</div>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="cFee"> Course Fee: </label>
                        <input 
                            type="number"
                            name="cFee"
                            value={this.state.input.cFee}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Course Fee"
                            id="cFee"
                            min="0" />
                            <div className="text-danger">{this.state.errors.cFee}</div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="fName">Father Name:</label>
                        <input 
                            type="text"
                            name="fName"
                            value={this.state.input.fName}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Father Name"
                            id="fName" />
                            <div className="text-danger">{this.state.errors.fName}</div>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="fOcup">Father's Occupation :</label>
                        <input 
                            type="text"
                            name="fOcup"
                            value={this.state.input.fOcup}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Father's Occupation"
                            id="fOcup" />
                            <div className="text-danger">{this.state.errors.fOcup}</div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="ftotExp">Father's Total Exp:</label>
                        <input 
                            type="number"
                            name="ftotExp"
                            value={this.state.input.ftotExp}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Father's Total Exp"
                            id="ftotExp"
                            min="0" />
                            <div className="text-danger">{this.state.errors.ftotExp}</div>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="fcurExp">Father's Exp with current Company:</label>
                        <input 
                            type="number"
                            name="fcurExp"
                            value={this.state.input.fcurExp}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Father's Exp with current Company"
                            id="fcurExp"
                            min="0" />
                            <div className="text-danger">{this.state.errors.fcurExp}</div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="rtcNo">Ration Card No: </label>
                        <input 
                            type="text"
                            name="rtcNo"
                            value={this.state.input.rtcNo}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter ration card no."
                            id="rtcNo" />
                            <div className="text-danger">{this.state.errors.rtcNo}</div>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="anInc">Annual Income</label>
                        <input 
                            type="number"
                            name="anInc"
                            value={this.state.input.anInc}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Annual Income"
                            id="anInc"
                            min="0" />
                            <div className="text-danger">{this.state.errors.anInc}</div>
                    </div>
                    </div>
                    <div className="py-4">
                    <button className="btn btn-success"  type="submit">Apply-EducationLoan </button>
                    <Link to="/"><button className="btn btn-danger" onClick={this.handleChange} style={{marginLeft: "20px"}}>Cancel</button></Link>
                  </div>                  
                </form>
            </div>
        );
    }
}

export default connect(null, { applyEducationLoan }) (Educationloanpage) ;