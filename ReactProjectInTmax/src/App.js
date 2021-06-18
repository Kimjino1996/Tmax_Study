import React from 'react';
import Home from './components/pages/Home/Home'
import Brand from './components/elements/widgets/brand/Brand'
import Features from './components/pages/Features/Features'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Cart from "./components/pages/cart/Cart";
import WishList from "./components/pages/wishilist/WishList";
import Compare from "./components/pages/compare/Compare"
import "./assets/css/mystyle.css";
import "./assets/css/animate 2.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/css/style.css";
import ToTop from"./utility/ToTop"
import ProductList from './components/pages/productlist/ProductList';
import MyAccount from './components/pages/myaccount/MyAccount';
//import "./assets/css/vendor-fontawesome-free.css";
//import "./assets/css/ionicons.min.css"
import  "./assets/icons8/css/line-awesome.css"

function App() {

  return (
    <>
    <BrowserRouter>
      <ToTop>
      <Switch>
        <Route exact path="/"><Home/></Route> 
        <Route exact path="/features"><Features/></Route>
        
        <Route exact path="/compare"><Compare/></Route>
        <Route exact path ="/wishlist"><WishList/></Route> 
        <Route exact path ="/cart"><Cart/></Route>
        <Route exact path ="/productlist"><ProductList></ProductList></Route>
        <Route exact path="/productdetail/:Id"><ProductDetail></ProductDetail></Route>
        {/*<Route exact path="/productdetail/:id"><Productdetail/></Route>*/}
        <Route exact path="/myaccount"><MyAccount/></Route>
      </Switch>
      </ToTop>
    </BrowserRouter>
      
    </>
  );
}

export default App;
