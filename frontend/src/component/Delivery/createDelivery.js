import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import BG from '../../images/d1giphy.gif';

export default class createDelivery extends Component {

  //intialization

  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      itemName: "",
      address: "",
      district: "",
      province: "",
      phoneNumber: ""
    }
  }


  handleInputChange = (e) => {
    const { clientName, value } = e.target;

    this.setState({
      ...this.state,
      [clientName]: value
    })

  }
  //save to db
  onSubmit = (e) => {

    e.preventDefault();

    const { clientName, itemName, address, district, province, phoneNumber } = this.state;

    const data = {
      clientName: clientName,
      itemName: itemName,
      address: address,
      district: district,
      province: province,
      phoneNumber: phoneNumber

    }

    console.log(data)

    //validation

    const re = /^[0-9\b]+$/;
    if (clientName == "" || itemName == "" || address == "" || district == "" || province == "" || phoneNumber == "") {
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }
    else if (itemName.length < 2) {
      swal("Invaid Item Name", "Length should be greater than 2", "error");
    }
    else if ((!re.test(String(phoneNumber))) || (phoneNumber.length != 10)) {
      swal("Invaid Contact Number", "There should be a valid pattern for contact number", "error");
    } else if (address.length < 2) {
      swal(" Please enter valid address", "length should be greater than 2", "error");
    }
    else {

      swal({
        title: "Are you sure?",
        text: `Client Name: ${this.state.clientName} | Item Name.: ${this.state.itemName} | Address: ${this.state.address} | District: ${this.state.district} | Province: ${this.state.province} | Phone Number: ${this.state.phoneNumber}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {

            axios.post("/postDelivery/save", data).then((res) => {
              if (res.data.success) {

                this.setState(
                  {
                    clientName: "",
                    itemName: "",
                    address: "",
                    district: "",
                    province: "",
                    phoneNumber: "",

                  }

                )

              }
            })
            swal("Delivery Details Added Successfully!", {
              icon: "success",
            });
          } else {
            swal("Not completed!");
          }
        });

    }
  }
  demo = () => {

    //setState
    this.setState({
      clientName: "A. Silva"
    })

    this.setState({
      itemName: "HK2140"
    })

    this.setState({
      address: "No.15/2, Lake road, Colombo 01"
    })

    this.setState({
      district: "Colombo"
    })
    this.setState({
      province: "Western"
    })
    this.setState({
      phoneNumber: "0710101010"
    })

  }

  render() {
    return (
      <div>
        <div class="row" >
          <div class="col-6" >

            <section id="hire">
              <div className="topic">
                <div class="container-fluid">
                  <div class="Jumbotron jumbotron-fluid">
                    <div className="container hire">
                      <br />
                      <marquee direction="left"><p class="display-3 ">Thanks For Using Our Delivery Service !</p></marquee>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <img className="d1giphy.gif" src={BG} alt='bg img' style={{ width: "120%", height: "70%", marginTop: "0px", marginRight: "5px" }} />


          </div>

          <div class="col-6">

            <div style={{ marginTop: "2%" }}>
              <div className="myformstyle" style={{ width: "80%", marginLeft: "80px" }}>

                <div className="card-body">
                  <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="text-center topic">Delivery Details Form </h1>
                    <br></br>

                    <form className="needs-validation" align="center" style={{ width: "100%" }} >
                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic"><b>Client Name: </b></label>
                        <input type="text"
                          id="validationTooltip01"
                          className="form-control"
                          name="clientName"
                          placeholder="Enter Your Name"
                          value={this.state.clientName}
                          onChange={this.handleInputChange} required />

                      </div>


                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic"><b>Item Name: </b></label>
                        <input type="text"
                          className="form-control"
                          name="itemName"
                          placeholder="Enter Item Name"
                          value={this.state.itemName}
                          onChange={this.handleInputChange} />
                      </div>

                      <label style={{ marginBottom: '5px' }} className="topic"><b>Address: </b></label>
                      <div class="row">
                        <div class="col">
                          <input type="text"
                            className="form-control"
                            name="address"
                            placeholder="Type address: home no, Street, Town"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            required />
                        </div>
                      </div>

                      <br></br>
                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic"><b>District: </b></label>
                        <input type="text"
                          className="form-control"
                          name="district"
                          placeholder="Enter Your District"
                          value={this.state.district}
                          onChange={this.handleInputChange} />
                      </div>

                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic"><b>Province: </b></label>
                        <input type="text"
                          className="form-control"
                          name="province"
                          placeholder="Enter Your Province"
                          value={this.state.province}
                          onChange={this.handleInputChange} />
                      </div>

                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic"><b>Phone Number: </b></label>
                        <input type="text"
                          className="form-control"
                          name="phoneNumber"
                          placeholder="phoneNumber"
                          value={this.state.phoneNumber}
                          onChange={this.handleInputChange} />
                      </div>



                      <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
                      <br />
                      <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Submit delivery Details
                      </button>

                      <br />
                      <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} ><a href="#"> <i className="far fa-check-square" style={{ textDecoration: "none" }}></i>
                        &nbsp; Shop more</a></button>

                    </form>



                  </div>

                </div>

              </div>


            </div>
          </div>




        </div>
        <br />
        <br />



      </div>
    )
  }
}

