import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            role_id: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { first_name, last_name, role_id, email, password, password_confirmation } = this.state;

        axios
            .post(
                "https://apimyulibrary.herokuapp.com/api/v1/users",
                {
                    user: {
                        first_name: first_name,
                        last_name: last_name,
                        role_id: role_id,
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleChange} required />

                    <input type="text" name="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleChange} required />

                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />

                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />

                    <input type="password" name="password_confirmation" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}