import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
    
    state = {
        books: []
    }

    async getBookList(){
        const res = await axios.get('https://apimyulibrary.herokuapp.com/api/v1/books');
        console.log(res);
        this.setState({books: res.data});
    }
    
    async componentDidMount(){
        this.getBookList();
    }

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

                {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                    }
                </div> */}
            </div>
        )
    }
}
