import React from "react";
import Navbar from '../NavBar/userNavbar'
import { connect } from "react-redux";

class Orders extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        let orderlist=this.props.order;
        return(
            <div className="container">
                <Navbar/>
                <h2>Your Orders</h2>
                <div className={orderlist.length?"d-block":"d-none"}>
                    {
                        Object.keys(orderlist).map(itemkey=>{
                            return(
                                <div className="card mb-3 w-75 border shadow-lg rounded text-left mx-auto col-md-6" style={{maxWidth:'720px'}}>
                                        <div className="row">
                                            <div className="col-md-1 fs-2">{parseInt(itemkey)+1}.</div>
                                            <div className="col-md-5 m-auto">
                                                <img src={orderlist[itemkey].image} className="img-fluid rounded-start" alt={orderlist[itemkey].title} style={{maxHeight:'200px'}}/>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <ul type="none" className="text-left">
                                                        <li className="fs-2 text-capitalize fw-bolder">{orderlist[itemkey].title}</li>
                                                        <li className="fs-4 text-capitalize">Type: {orderlist[itemkey].category}</li>
                                                        <li className="font-weight-bold">Price: $ {orderlist[itemkey].price}/{orderlist[itemkey].units}</li>
                                                        <li className="text-capitalize">Quantity: {orderlist[itemkey].count}</li>
                                                        <li className="text-capitalize">About: {orderlist[itemkey].description}</li>
                                                        <li className=" text-capitalize">By {orderlist[itemkey].company}</li>
                                                    </ul> 
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )        
                        })
                    }
                </div>
                <div className={orderlist.length?"d-none":"d-block"}>
                    <h1>No recent orders</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("orderlist:",state.user.orderDetails)
    return{
        order: state.user.orderDetails
    }
}

export default connect(mapStateToProps)(Orders);