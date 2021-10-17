import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";


export default class Navigation extends Component {

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        console.log(this.props.auth);
        // if (this.props.auth.isAuthenticated) {
            
        // }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        
        // if (nextProps.auth.isAuthenticated) {
        //     this.props.history.push("/dashboard"); // push user to dashboard when they login
        // }

        // if (nextProps.errors) {
        //     this.setState({
        //         errors: nextProps.errors
        //     });
        // }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        university library
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" >Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register" >Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}