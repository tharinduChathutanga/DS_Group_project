import React, { Component } from 'react';
import axios from 'axios';

import "../Payment/mobilepayH.css";


class mobilepaydetailsH extends Component {

  constructor(props) {

    super(props);

    this.state = {
      posts: []
    };

  }

  //call the link
  componentDidMount() {
    this.retrievePosts();
  }


  retrievePosts() {
    axios.get("http://localhost:4000/mobilepay").then(res => {
      console.log("hello3");
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts

        });

        console.log(this.state.posts);
      }
    });
  }

  //delete function 
  onDelete = (id) => {
    axios.delete(`http://localhost:4000/mobilepay/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievePosts();
    })
    console.log("delete me")
  }




  //search function start here

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.emailaddress.toLowerCase().includes(searchKey)


    )

    this.setState({ posts: result })
  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:4000/mobilepay").then(res => {

      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className='text-center'>
          <h3> Mobile Payment Details </h3></div>
        <button type="button" class="btn btn-outline-success">
          <i class="material-icons">navigate_before</i>
          <a href="#" style={{ textDecoration: 'none', color: 'white' }}>
            Back
          </a></button>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

          </input>

        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Pin Number</th>
              <th scope="col">Amount</th>
              <th scope="col">Sent success Email</th>



            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>

                    {posts.emailaddress}

                  </td>

                  <td>{posts.pinNum}</td>
                  <td>{posts.amount}</td>


                  <td>
                    <a className="btn btn-warning" href={"emailP"}>
                      <i class="material-icons">Enter Email</i>Edit
                    </a>
                    &nbsp;
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                      <i className="material-icons">delete_forever</i>Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <br />

          <button className="btn btn-primary"><a href="/mobilePay" style={{ textDecoration: 'none', color: 'white' }}>Add new Payment</a></button>
        </table>


      </div>

    )
  }
}

export default mobilepaydetailsH;