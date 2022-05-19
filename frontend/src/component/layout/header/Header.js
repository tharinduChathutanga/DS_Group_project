import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#39FC11"
      burgerColorHover="#39A423"
      logo={logo}
      logoWidth="20vmax"
      navColor1="#C2C8C1"
      logoHoverSize="10px"
      logoHoverColor="#39FC11"
      link1Text="Home"
      link2Text="Product"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.2vmax"
      link1Color="rgba(35,35,35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      link1ColorHover="#39FC11"
      link2ColorHover="#39FC11"
      link3ColorHover="#39FC11"
      link4ColorHover="#39FC11"
      link2Margin="2vmax"
      link3Margin="0"
      link4Margin="2vmax"
      profileIcon={true}
      profileIconUrl="/login"
      ProfileIconElement={FaUserAlt}
      searchIcon={true}
      SearchIconElement={FaSearch}
      cartIcon={true}
      CartIconElement={FaShoppingCart}
      profileIconColor="rgba(35,35,35,0.8)"
      searchIconColor="rgba(35,35,35,0.8)"
      cartIconColor="rgba(35,35,35,0.8)"
      profileIconColorHover="#39FC11"
      searchIconColorHover="#39FC11"
      cartIconColorHover="#39FC11"
      searchIconMargin="1vmax"
      cartIconMargin="1vmax"
      profileIconMargin="1vmax"
    />
  );
};

export default Header;
