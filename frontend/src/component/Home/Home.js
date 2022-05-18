import React, { Fragment } from "react";
import { FaMouse } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Agri Products</p>
        <h1>Find Your Products</h1>

        <a href="#container">
          <button>
            Scroll
            <FaMouse />
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
