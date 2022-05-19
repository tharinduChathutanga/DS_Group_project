import React, { Component } from 'react';
import axios from 'axios';

class deliveryDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {clientName,itemName,address,district,province,phoneNumber} = this.state.post;
      return(
        <div>
        
        <div className="container">
        <div class="row">
        <div class="col-6">
    <div style={{marginTop:'20px'}}>
          <h1>{clientName}</h1>
          
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Client Name</dt>
            <dd className="col-sm-9">{clientName}</dd>
            <dt className="col-sm-3">Item Name</dt>
            <dd className="col-sm-9">{itemName}</dd>
            <dt className="col-sm-3">Address</dt>
            <dd className="col-sm-9">{address}</dd>
            <dt className="col-sm-3">District</dt>
            <dd className="col-sm-9">{district}</dd>
            <dt className="col-sm-3">Province</dt>
            <dd className="col-sm-9">{province}</dd>
            <dt className="col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{phoneNumber}</dd>
          </dl>
         
        </div>
    </div>
    <div class="col-6">
   <div className="imageprofile">
          <img src=" "alt="..." className="rounded-circle" style={{marginLeft:"20%"}}/>
          </div>
    </div>
    
    
  </div>
        
        </div>
        </div>
        
      )
    }
  }
  export default deliveryDetails;