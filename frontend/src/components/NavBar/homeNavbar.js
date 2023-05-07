import React from "react";
import reactDom from "react-dom";
import './logo.css'
import logos from './img/logo.png'


export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar bg-danger shadow rounded">
                    <div className="container text-white">
                        <div className="h1 text-start fw-bolder col-md-6 mx-auto my-auto" id="logo">
                        <span>{<img src= {logos} alt="Bikes" className="mx-auto img-fluid rounded-start" style={{height:"4rem"}} />}</span>
                            TARDIS BIKES
                        </div>
                        <ul class="nav justify-content-end col-md-6 mx-auto my-auto">
                            <a className="btn btn-priamry" href="/login">Login</a>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}