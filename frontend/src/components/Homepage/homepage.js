import React from 'react';
import './homepage.css';
import Navbar from '../NavBar/homeNavbar'

export default class Homepage extends React.Component{
    constructor(){
        super();
    }
    enterSite=e=>{
        e.preventDefault();
        this.props.history.push('/login');
    }
    render(){
        return(
            <div className="container">
                <Navbar/>
                <div id="text">GREAT DEALS</div>
                <div id="text1">FREE DELIVERY OVER $150</div>
                <div id="text2">USE CODE "FCUK15" FOR 15% OFF</div>
                <div className="mb-5">
                    <a href="/#" onClick={e=>this.enterSite(e)}><button id="button1" className="shadow-lg rounded">Order Now</button></a>
                </div>
            </div>
        )
    }
}