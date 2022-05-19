import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BG from '../../images/sMpayment.gif';
import '../Payment/sucessMpay.css';


class sucessMobiP extends Component {


    render() {
        return (
            <center>
                <br />
                <br />
                <img className="sucess-img" src={BG} alt='bg img' />
                <br />
                <br />
                <h1 style={{ color: "#000080", fontStyle: "italic" }}><b>Your Payment was Successfull</b></h1>
                <br />
                <button button type="button" class="btn btn-outline-info" >Continue with deliver Payment </button>
            </center>

        )
    }
}


export default sucessMobiP;