import React, { Component } from "react";
import axios from "axios";


import BG from '../../images/payAdd.gif';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";


export default class createrooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailaddress: "",
            pinNum: "",
            amount: "",

        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { emailaddress, pinNum, amount } =
            this.state;

        const data = {
            emailaddress: emailaddress,
            pinNum: pinNum,
            amount: amount,

        };
        console.log(data);

        if (emailaddress == "" || pinNum == "" || amount == "") {
            alert("Please fill the form correctly", "Form values cannot be empty", "error");
        } else {

            axios.post("http://localhost:4000/mobilepay/save", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        emailaddress: "",
                        pinNum: "",
                        amount: "",

                    });
                    alert(
                        "Added Successfully",
                        "Mobile payment details added successfully",
                        "success"
                    );
                }
            });
        }
    };

    demo = () => {

        //setState
        this.setState({
            emailaddress: "nimeshdesilva@gmail.com"
        })

        this.setState({
            pinNum: "523624"
        })

        this.setState({
            amount: "Rs. 500.00"
        })


    }

    render() {
        return (
            <div>
                <div class="row" >
                    <div class="col-5" >
                        <img className="d1giphy.gif" src={BG} alt='bg img' style={{ width: "130%", height: "70%", marginTop: "50px", marginRight: "30px" }} />

                        <section id="hire">
                            <div className="topic">
                                <div class="container-fluid">
                                    <div class="Jumbotron jumbotron-fluid">
                                        <div className="container hire">
                                            <br />
                                            <marquee direction="left"><p class="display-3 ">Thanks for the Payment !</p></marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="col-5">

                        <div style={{ marginTop: "2%" }}>
                            <div className="myformstyle" style={{ width: "120%", marginLeft: "90px" }}>

                                <div className="card-body">
                                    <div className="col-md-8 mt-4 mx-auto">
                                        <h2 className="text-center topic">Mobile Payment form  </h2>

                                        <form className="needs-validation" align="center" style={{ width: "100%" }} >
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }} className="topic">Customer Email Address: </label>
                                                <input type="text"
                                                    id="validationTooltip01"
                                                    className="form-control"
                                                    name="emailaddress"
                                                    placeholder="Enter Your Email Address"
                                                    value={this.state.emailaddress}
                                                    onChange={this.handleInputChange} required />

                                            </div>

                                            <label style={{ marginBottom: '5px' }} className="topic">PIN : </label>
                                            <div class="row">
                                                <div class="col">
                                                    <input type="number"
                                                        className="form-control"
                                                        name="pinNum"
                                                        placeholder="6 digit pin number"
                                                        value={this.state.pinNum}
                                                        onChange={this.handleInputChange}
                                                        required />
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <label style={{ marginBottom: '5px' }} className="topic">AMOUNT : </label>
                                                <div class="col">
                                                    <input type="text"
                                                        className="form-control"
                                                        name="amount"
                                                        placeholder="Amount"
                                                        value={this.state.amount}
                                                        onChange={this.handleInputChange} />
                                                </div>


                                            </div>






                                            <div className="form-group">
                                                <button type="button" class="btn btn-outline-info" onClick={this.demo} > Demo </button>

                                                <br></br>
                                                <br></br>
                                                <Link to={"/sucessP"} value="Pay Rs." className="btn btn-outline-primary" onClick={this.onSubmit}>Pay</Link>

                                                <br />
                                            </div>


                                        </form>



                                    </div>

                                </div>

                            </div>
                            {this.state.itemName}

                        </div>
                    </div>




                </div>
                <br />
                <br />



            </div>
        )
    }
}