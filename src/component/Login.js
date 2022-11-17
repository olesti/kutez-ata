/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import './style.css'
import { useState } from 'react';

/*
var handleEmailChange= (e)=> {
    this.setState({email: e.target.value});
 }*/
/*var handlePasswordChange= (e)=>{
    this.setState({password: e.target.value});
 }*/


function Login () {
    const [inputs, setInputs] = useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    
  return (
    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Kutez Download Panel</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={inputs.name} 
              onChange={handleChange}

            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={inputs.value } 
              onChange={handleChange}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2" >
            Forgot password?

          </p>
        </div>
      </form>
    </div>
  )
  
}

export default Login;