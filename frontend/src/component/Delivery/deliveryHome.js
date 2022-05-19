import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class deliveryHome extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}
  
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/postsDelivery").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts);

    }
  });
}

onDelete = (id) =>{
  
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {

  if (willDelete) {
axios.delete(`/postDelivery/delete/${id}`).then((res)=>{
  swal("Deleted Successful", "Delivery Details are removed", "success");
  
  
  this.retrievePosts();
})
} else {
swal("Your imaginary file is safe!");
}
}); 
}

filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.clientname.toLowerCase().includes(searchKey)||
  post.itemName.toLowerCase().includes(searchKey) ||
  post.address.toLowerCase().includes(searchKey) ||
  post.district.toLowerCase().includes(searchKey) ||
  post.province.toLowerCase().includes(searchKey) ||
  post.phoneNumber.toLowerCase().includes(searchKey) 
 
  
  )
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/postsDelivery").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}


  render() {
    return (
      <div className="container">
        <div className="text-center">
        <h2 className="adminletter"> All Deliveries </h2>
        
        </div>
        <div className="col-md-6 mb-4">
        <form class="form-inline">
        <i class="fas fa-search" aria-hidden="true"></i>
          <input
          className="form-control form-control-sm ml-3 w-75"
          type="search"
          placeholder="Search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
          </form>
        </div>      
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Delivery ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Item Name</th>
            <th scope="col">Address</th>
            <th scope="col">District</th>
            <th scope="col">Province</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/postDelivery/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.clientName}
                  </a>
                  </td>
                <td>{posts.itemName}</td>
                <td>{posts.address}</td>
                <td>{posts.district}</td>
                <td>{posts.province}</td>
                <td>{posts.phoneNumber}</td>

                <td>
                
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;EDIT
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;DELETE
                  </a>
                </td>
              </tr>
        ))}
        </tbody>
        </table>        
      </div>
    )
  }
}
