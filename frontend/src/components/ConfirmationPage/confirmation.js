import React from "react";
import Navbar from '../NavBar/userNavbar'
import { connect } from "react-redux";
import axios from 'axios';

class Confirmation extends React.Component{
    stockUpdate=()=>{
        for(let i=0;i<this.props.order.length;i++){
            let editData = this.props.order[i];
            editData.totalStock = editData.totalStock-editData.count;
            console.log(editData);
            axios.post('http://localhost:4500/stock-update',editData).then((res)=>{
                console.log(res);
            });
        }
    }
    render(){
        let orderlist=this.props.order;
        {this.stockUpdate()}
        return(
            <div className="container">
                <Navbar/>
                <h1 className=""><u>Order Confirmation</u></h1>
                <h3 className="text-success">Your Order is Confirmed!</h3>
                <div>
                    <h4>Order List</h4>
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
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("orderlist:",state.user.orderDetails)
    console.log("user state:",state.user);
    return{
        order: state.user.orderDetails,
        user: state.user.userLogin
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        userLoginDispatcher: (data) => dispatch({type:"userLogin",payload: data}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);