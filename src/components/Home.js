import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <h3 className="display-4">Welcome Home!</h3>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-sm-2">
                            <Link to="/register" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                                className="btn btn-primary"
                            > Register </Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/login" style={{ width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }}
                                className="btn btn-secondary"
                            > Log in </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
