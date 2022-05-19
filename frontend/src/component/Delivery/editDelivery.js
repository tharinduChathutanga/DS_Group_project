import React, { Component } from 'react';
import axios from 'axios'; 
import swal from 'sweetalert';

export default class editDelivery extends Component {


  //intialization

  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      itemName: "",
      address: "",
      district: "",
      province: "",
      phoneNumber: "",
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
    const id = this.props.match.params.id;
    const { clientName, itemName, address, district,  province, phoneNumber } = this.state;

    const data = {
      clientName: clientName,
      itemName: itemName,
      address: address,
      district: district,
      province: province,
      phoneNumber: phoneNumber

    }

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
        text: `Client Name: ${this.state.clientName} | Item Name.: ${this.state.itemName} | Address: ${this.state.address} | District: ${this.state.district} | Province: ${this.state.province} | Contact Number: ${this.state.phoneNumber}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {

            axios.put(`postDelivery/update/${id} `, data).then((res) => {
              if (res.data.success) {
                
                this.setState(
                  {
                    clientName: "",
                    itemName: "",
                    address: "",
                    district: "",
                    province: "",
                    phoneNumber: ""

                  }

                )
               
              }
            })
            swal("Delivery Details Updated Successfully!", {
              icon: "success",
            });
          } else {
            swal("You have cancelled the update!");
          }
        });

    }
  }

  
  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/postDelivery/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          clientName:res.data.post.clientName,
          itemName:res.data.post.itemName,
          address:res.data.post.address,
          district:res.data.post.district,
          province:res.data.post.province,
          phoneNumber:res.data.post.phoneNumber
          
        });
        console.log(this.state.post);
      }
    });
  }

  

  render() {
    return (
      <div>
      <div class="row" >
      <div class="col-5" >
    <img src={""} className="rounded-circle" style={{width:"130%", height:"70%", marginTop:"50px", marginRight:"30px"}} />

    <section id="hire">
            <div className="topic">
              <div class="container-fluid">
                <div class="Jumbotron jumbotron-fluid">
                  <div className="container hire">
                    <br/>
                    <marquee direction="left"><p class="display-3 ">Thanks for shopping with us !</p></marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
    
    <div class="col-5">
      
      <div style={{marginTop: "2%"}}>
      <div className="myformstyle" style={{ width: "120%", marginLeft:"90px"}}>

<div className="card-body">
  <div className="col-md-8 mt-4 mx-auto">
    <h1 className="text-center topic">Delivery Detail Form </h1>

    <form className="needs-validation" align="center" style={{ width: "100%" }} >
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Client Name: </label>
        <input type="text"
          id="validationTooltip01"
          className="form-control"
          name="clientName"
          placeholder="Enter Your Name"
          value={this.state.clientName}
          onChange={this.handleInputChange} required />

      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Item Name: </label>
        <input type="text"
          className="form-control"
          name="itemName"
          placeholder="Enter Item Name"
          value={this.state.itemName}
          onChange={this.handleInputChange} />
      </div>

      <label style={{ marginBottom: '5px' }} className="topic">Address: </label>
      <div class="row">
        <div class="col">
          <input type="text"
            className="form-control"
            name="address"
            placeholder="Home No"
            value={this.state.address}
            onChange={this.handleInputChange}
            required />
        </div>
        </div>


      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Province: </label>
        <input type="text"
          className="form-control"
          name="district"
          placeholder="Enter Your District"
          value={this.state.district}
          onChange={this.handleInputChange} />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Province: </label>
        <input type="text"
          className="form-control"
          name="province"
          placeholder="Enter Your Province"
          value={this.state.province}
          onChange={this.handleInputChange} />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Phone Number</label>
        <input type="text"
          className="form-control"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handleInputChange} />
      </div>

    
      <br/>
      <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
        <i className="far fa-check-square"></i>
        &nbsp; Update delivery Details
      </button>
    
    </form>

  </div>
  
</div>

</div>         
      </div>
    </div>  
  </div>
  <br/>
  <br/>
  

  
      </div>
    )
  }
}

