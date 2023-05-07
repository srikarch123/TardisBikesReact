import React from "react";
import Navbar from '../NavBar/userNavbar'
import { connect } from "react-redux";

class Cart extends React.Component{
    // constructor(){
    //     super();
    //     let data= JSON.parse(localStorage.getItem("cartList"));
    //     this.state={
    //         cartList:data,
    //     }
    // }

    addItem=(e,index)=>{
        e.preventDefault();
        let cartList =  this.props.cart;
        cartList[index].count = cartList[index].count + 1;
        this.props.cartDispatcher(cartList);
        window.location.reload();
        // localStorage.setItem("cartList",JSON.stringify(cartList));
        // console.log(JSON.parse(localStorage.getItem("cartList")))
        // this.setState({cartList:cartList});
        // this.setState({count:cartList[index].count});
    }

    totalAmount=()=>{
        let totalCost = 0;
        let list = this.props.cart;
        for(let i = 0; i < list.length ; i++){
            totalCost = totalCost + (list[i].count * list[i].price);
        }
        return(totalCost);
    }
    remItem=(e,index)=>{
        e.preventDefault();
        let cartList = this.props.cart;
        if(cartList[index].count>1){
            cartList[index].count = cartList[index].count - 1;
        }
        else{
            cartList.splice(index,1);
        }
        this.props.cartDispatcher(cartList);
        window.location.reload();
        // localStorage.setItem("cartList",JSON.stringify(cartList));
        // console.log(JSON.parse(localStorage.getItem("cartList")))
        // this.setState({cartList:cartList});       
    }
    handlePayment=e=>{
        this.props.history.push("/payment");
    }
    render(){
        const cartList=this.props.cart;
        return(
            <div className="container">
                <Navbar/>
                <h1>Cart</h1>
                <div className="mb-3">
                    {
                    Object.keys(cartList).map(itemkey=>{
                        return(
                            <div>
                                <div className="card mb-3 w-75 border border-danger shadow-lg rounded text-left mx-auto my-auto" style={{maxWidth:'720px'}}>
                                        <div className="row">
                                            <div className="col-md-4 mx-auto my-auto">
                                                <img src={cartList[itemkey].image} className="img-fluid rounded-start" alt={cartList[itemkey].title}/>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card-body">
                                                    <ul type="none" className="text-left">
                                                        <li className="fs-2 text-capitalize fw-bolder">{cartList[itemkey].title}</li>
                                                        <li className="fs-4 text-capitalize">Type: {cartList[itemkey].category}</li>
                                                        <li className="font-weight-bold">Price: ${cartList[itemkey].price}/{cartList[itemkey].units}</li>
                                                        <li className=" text-capitalize">By {cartList[itemkey].company}</li>
                                                        <li className="text-capitalize fw-bold">{cartList[itemkey].count} X $ {cartList[itemkey].price}.00 = ₹{cartList[itemkey].count*cartList[itemkey].price}.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4 my-auto mx-auto">
                                                <div className={cartList[itemkey].count===0?"d-none":"form-inline pl-4"}>
                                                    <button className="btn btn-danger" onClick={e=>this.remItem(e,itemkey)} style={{maxHeight:"50px",maxWidth:"50px"}}>-</button>
                                                    <h1 className="m-3">{cartList[itemkey].count}</h1>
                                                    <button className="btn btn-danger" onClick={e=>this.addItem(e,itemkey)} style={{maxHeight:"50px",maxWidth:"50px"}}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className={cartList.length?"d-block":"d-none"}>
                    <h2>Total Items: <span className="text-danger">{cartList.length}</span></h2>
                    <h2>Total Cost: <span className="text-danger">$ {this.totalAmount()}.00</span></h2>
                    <button className="btn btn-danger" style={{height:"70px",width:"250px"}} onClick={e=>{this.handlePayment(e)}}>Proceed to Checkout</button>
                </div>
                <div className={cartList.length?"d-none":"d-block"}>
                    <h1>No items in cart</h1>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log(state.user.cartList)
    return{
        cart: state.user.cartList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cartDispatcher: (data)=>dispatch({type:"cartList",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);