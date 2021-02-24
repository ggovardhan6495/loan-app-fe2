import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { applyHomeLoan } from "../../actions/homeLoanAction";
import Header from './Header';

class HomeLoanPage extends Component {
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

    submitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios.post('http://localhost:9002/hloan/v1/apply', this.state)
          .then(response => {
              console.log(response)
          })
          .catch(error => {
              console.log(error)
          })
  }

    handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["cmpName"] = "";
            input["desgn"] = "";
            input["totExp"] = "";
            input["curExp"] = "";
            input["anInc"] = "";
            this.setState({input:input});
            console.log(input);
            alert('Your request is submited');
        }

        this.props.applyHomeLoan(this.state.input);
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        
        if (!input["cmpName"]) {
            isValid = false;
            errors["cmpName"] = "Please enter your company name.";
          }
        if (!input["desgn"]) {
            isValid = false;
            errors["desgn"] = "Please enter your desgination.";
        }          
        if (!input["totExp"]) {
            isValid = false;
            errors["totExp"] = "Please enter your total experience.";
        }

        if (!input["curExp"]) {
            isValid = false;
            errors["curExp"] = "Please enter your exp with current company.";
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


    render() {
        return (
            <div className="container bg-grey">
              <form onSubmit={this.handleSubmit}>
                <Header />
                  <div className="row">
                  <div className="form-group col-6">
                          <label htmlFor="cmpName">Company Name:</label>
                          <input 
                            type="text"
                            name="cmpName"
                            value={this.state.input.cmpName}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Enter Company Name"
                            id="cmpName" />
                            <div className="text-danger">{this.state.errors.cmpName}</div>
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="desgn">Designation:</label>
                          <input 
                              type="text"
                              name="desgn"
                              value={this.state.input.desgn}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder="Enter Designation"
                              id="desgn" />
                              <div className="text-danger">{this.state.errors.desgn}</div>
                      </div>
                  </div>
                  <div className="row">
                  <div className="form-group col-6">
                          <label htmlFor="totExp">Total Experience:</label>
                          <input 
                              type="number"
                              name="totExp"
                              value={this.state.input.totExp}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder="Enter Total Experience"
                              id="totExp"
                              min="0" />
                              <div className="text-danger">{this.state.errors.totExp}</div>
                      </div>
                      <div className="form-group col-6">
                          <label htmlFor="curExp">Experience with current Company:</label>
                          <input 
                              type="number"
                              name="curExp"
                              value={this.state.input.curExp}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder="Enter Experience with current Company"
                              id="curExp"
                              min="0" />
                            <div className="text-danger">{this.state.errors.curExp}</div>
                      </div>
                  </div>
                  <div className="row">
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
                    <button className="btn btn-success"  type="submit">ApplyHomeLoan </button>
                    <Link to="/"><button className="btn btn-danger" onClick={this.handleChange} style={{marginLeft: "20px"}}>Cancel</button></Link>
                  </div>                  
 
              </form>
                
            </div>
        )
    }
}

// HomeLoanPage.propTypes = {
//     applyHomeLoan: propTypes.func.isRequired
// };

export default connect(null, { applyHomeLoan }) (HomeLoanPage);