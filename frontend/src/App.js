import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';
import UserSignup from './components/Signup/user_signup';
import VendorSignup from './components/Signup/vendor_signup';
import VendorHomepage from './components/Vendor_Homepage/VendorHomepage'
import UploadStock from './components/UploadStock/uploadStock'
import UserHomepage from './components/UserHomePage/UserHomePage'
import EditStock from './components/Edit_Stock/editStock'
import ProductPage from './components/ProductPage/productPage'
import Cart from './components/Cart/cart'
import Orders from './components/OrdersPage/orders'
import Payment from './components/Payment/payment'
import Confirmation from './components/ConfirmationPage/confirmation';
import Footer from './components/Footer/footer';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact render={props=><Homepage {...props}/>}/>
              <Route path="/login" exact render={props=><Login {...props}/>}/>
              <Route path="/user-signup" exact render={props=><UserSignup {...props}/>}/>
              <Route path="/vendor-signup" exact render={props=><VendorSignup {...props}/>}/>
              <Route path="/vendor-home" exact render={props=><VendorHomepage {...props}/>}/>
              <Route path="/upload-stock" exact render={props=><UploadStock {...props}/>}/>
              <Route path="/user-home" exact render={props=><UserHomepage {...props}/>}/>
              <Route path="/edit-stock" exact render={props=><EditStock {...props}/>}/>
              <Route path="/product-page" exact render={props=><ProductPage {...props}/>}/>
              <Route path="/shopping-cart" exact render={props=><Cart {...props}/>}/>
              <Route path="/payment" exact render={props=><Payment {...props}/>}/>
              <Route path="/your-orders" exact render={props=><Orders {...props}/>}/>
              <Route path="/order-confirmation" exact render={props=><Confirmation {...props}/>}/>
            </Switch>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default connect(null)(App);

