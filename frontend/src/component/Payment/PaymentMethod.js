import React, { Component } from 'react';

import { Link } from 'react-router-dom';



class PaymentMethod extends Component {

  render() {
    return (

      <div className="App" >

        <h1 className="topic" style={{ textAlign: 'center' }}><b>PAY NOW </b></h1>
        <br />
        <h4 style={{ textAlign: 'center' }}>Please do payments to proceed ahead with your choice</h4>
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <form>
              <h4 style={{ textAlign: 'center' }}>Select Payment option:</h4>
              <br />
              <div className="form-group">
                <Link to={"/CardPay"} style={{ textAlign: 'center' }} className="btn btn-outline-primary btn-lg" role="button" ><span>Card Payments</span></Link>
              </div><br />
              <div className="form-group">
                <Link to={"/mobilePay"} style={{ textAlign: 'center' }} className="btn btn-outline-primary btn-lg" role="button" ><span>Mobile Payment</span></Link>
              </div><br />



            </form>
          </center>
        </div>


        <br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br />

      </div>

    );
  }
}
export default PaymentMethod;