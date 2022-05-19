import React, { Component } from 'react';
import axios from 'axios';
//import "./styles1.css";

export default class mobilepaydAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:4000/mobilepay/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });
                console.log(this.state.post);
            }
        });
    }
    render() {
        const { emailaddress, pinNum, amount } = this.state.post;
        return (
            <div className='text-center'>
                <button className="btn btn-success btnback2">
                    <i class="material-icons">navigate_before</i>
                    <a href="/client" style={{ textDecoration: 'none', color: 'white' }}>
                        Back
                    </a></button>
                <h1 >{emailaddress}</h1>


                <hr />

                <dl className="row">
                    <dt className="col-sm-3">pinNum</dt>
                    <dd className="col-sm-9">{pinNum}</dd>
                    <dt className="col-sm-3">amount</dt>
                    <dd className="col-sm-9">{amount}</dd>


                </dl>

            </div>
        )
    }
}