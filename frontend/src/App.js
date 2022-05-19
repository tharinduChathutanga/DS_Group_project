import "./App.css";
import Header from "./component/layout/header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Webfont from "webfontloader";
import React from "react";
import Footer from "./component/layout/footer/Footer.js";
import Home from "./component/Home/Home.js";
import Loader from "./component/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Dashboard from "./component/Admin/Dashboard";

//Payment management
import mobilepayAdd from "./component/Payment/mobilepayAdd";
import PaymentAddform from "./component/Payment/PaymentAddform";
import PaymentMethod from "./component/Payment/PaymentMethod";
import sucessMobiP from "./component/Payment/sucessMobiP";
import mobilepaydAdmin from "./component/Payment/mobilepaydAdmin";
import mobilepaydetailsH from "./component/Payment/mobilepaydetailsH";
import payEmail from "./component/Payment/payEmail";

//Delivery Management
import createDelivery from './component/Delivery/createDelivery';
import deliveryDetails from './component/Delivery/deliveryDetails';
import deliveryHome from './component/Delivery/deliveryHome';
import editDelivery from './component/Delivery/editDelivery';
import deliveryNavBar from './component/Delivery/deliveryNavBar';
import deliveryEmailer from './component/Delivery/deliveryEmailer';


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      isAuthenticated && <UserOptions user={user} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/account" element={<Profile />} />
        <Route exact path="/me/update" element={<UpdateProfile />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/CardPay" component={PaymentAddform}></Route>
        <Route path="/mobilePay" component={mobilepayAdd}></Route>
        <Route path="/mobileDetailA/post/:id" component={mobilepaydAdmin}></Route>
        <Route path="/mobilePHome" component={mobilepaydetailsH}></Route>
        <Route path="/emailP" component={payEmail}></Route>
        <Route path="/sucessP" component={sucessMobiP}></Route>
        <Route path="/payM" exact component={PaymentMethod}></Route>
        <deliveryNavBar> </deliveryNavBar>
        <deliveryEmailer></deliveryEmailer>
        <Route path="/deliveryHome" exact component={deliveryHome}></Route>
        <Route path="/add" exact component={createDelivery}></Route>
        <Route path="/edit/:id" exact component={editDelivery}></Route>
        <Route path="/post/:id" exact component={deliveryDetails}></Route>
        <Route path="/email" exact component={deliveryEmailer}></Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
