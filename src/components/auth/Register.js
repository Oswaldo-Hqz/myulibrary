import axios from "axios";
import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            userRole: [],
            email: "",
            password: "",
            password_confirmation: "",
            userRoleSelected: 0,
            errors: {}
        };
    };
    
    getUserRole = async () => { 
        const res = await axios.get('https://apimyulibrary.herokuapp.com/api/v1/roles');
        this.setState({
            userRole: res.data,
            userRoleSelected: res.data[0].id
        });
    }

    componentDidMount() {
        this.getUserRole();
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }; 
    
    onSubmit = e => {
        e.preventDefault(); 
        
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            role_id: this.state.userRoleSelected,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }; 
        
        this.props.registerUser(newUser, this.props.history); 
    }; 


    render() {
        const { errors } = this.state; 
        
        return (
        
            <div className="container h-100 ">
                <div className="row mt-2 h-100 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <h5 className="card-title d-inline">Register</h5>
                                <small className="btn btn-link d-inline text-muted">
                                Do you already have an account? <Link to="/login">Log in here!</Link>
                                </small>
                            </div>
                            <div className="card-body">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="name">First name</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.first_name })}
                                        onChange={this.onChange} value={this.state.first_name} error={errors.first_name} id="first_name" type="text" />
                                        <span className="invalid-feedback">{errors.first_name}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="name">Last name</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.last_name })}
                                        onChange={this.onChange} value={this.state.last_name} error={errors.last_name} id="last_name" type="text" />
                                        <span className="invalid-feedback">{errors.last_name}</span>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <select className="form-control" id="userRoleSelected" onChange={this.onChange} value={this.state.userRoleSelected}>
                                            {
                                                this.state.userRole.map(role => 
                                                    <option key={role.id} value={role.id} >
                                                        {role.name}
                                                    </option> 
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="email">Email</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.email })}
                                        onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email" />
                                        <span className="invalid-feedback">{errors.email}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="password">Password</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.password })}
                                        onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" />
                                        <span className="invalid-feedback">{errors.password}</span>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="password_confirmation">Password confirmation</label>
                                        <input className={classnames("form-control", { "is-invalid": errors.password_confirmation })}
                                        onChange={this.onChange} value={this.state.password_confirmation} error={errors.password_confirmation} id="password_confirmation" type="password" />
                                        <span className="invalid-feedback">{errors.password_confirmation}</span>
                                    </div>
                                    <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                                        <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                                            type="submit" className="btn btn-primary"
                                        > Register </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
