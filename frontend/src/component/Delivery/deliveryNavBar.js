import React, { Component } from 'react'

export default class deliveryNavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style = {{backgroundColor:'#e3f2fd'}}>
       <div class = "container-fluid">
        
        <button class="navbar-toggler" type="button"
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">All Product Details</a>
            </li>
           </ul>
        </div>
        </div>
      </nav>
    )
  }
}
