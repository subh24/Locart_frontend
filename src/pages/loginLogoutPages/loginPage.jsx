import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { useHistory,generatePath } from 'react-router';
import './loginLogoutPages.css'

export default function Login(){
    const history = useHistory();
    const handleSubmit = (e) =>{
            console.log(e)
            localStorage.setItem('credentials',JSON.stringify({"loginStatus":true}))
            history.push(generatePath("/"));
        }
   
        
        return (
            <div className='container login-window'>
                <Form onSubmit={handleSubmit} id="loginForm">

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block login-button">Sign In</button>
                
            </Form></div>
        );
    
}