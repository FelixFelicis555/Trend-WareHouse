import React,{Component} from 'react';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import ProductView from "./components/ProductView";
import AddProd from "./components/AddProd";
import DeleteProd from "./components/DeleteProd";
import UpdateProd from "./components/UpdateProd";
import CartDetails from './components/CartDetails';
import UserProfile from "./components/UserProfile";
import PlaceOrder from './components/PlaceOrder';
import PaymentScreen from './components/PaymentScreen';
import NFTDetails from './components/NFTDetails';
import './App.css';

export default class App extends Component{
  render(){
return(

<React.Fragment>
  <Navbar/>
  <Routes>
    <Route  path="/" element ={<ProductView/>}/>
    <Route path="/ProductView" element={<ProductView/>}/>
    <Route path="/AddProd" element={<AddProd/>}/>
    <Route path="/DeleteProd" element={<DeleteProd/>}/>
    <Route path="/UpdateProd" element={<UpdateProd/>}/>
    <Route path="/CartDetails" element={<CartDetails/>}/>
    <Route path="/UserProfile" element={<UserProfile/>}/>
    <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
    <Route path="/PaymentScreen" element={<PaymentScreen/>}/>
    <Route path="/NFTDetails" element={<NFTDetails/>}/>

<Route component={Default}/>

 </Routes>
</React.Fragment>
)
  }
}



