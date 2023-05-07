import React from "react";
import delivery from './images/icon-delivery.png'
import nocontact from './images/No_contact_delivery.png'
import returns from './images/icon-return.png'
import Navbar from '../NavBar/userNavbar'
import { connect } from "react-redux";


class ProductPage extends React.Component{
    constructor(){
        super();
        this.state={
            list:{
                image:'',
                category:'',
                title:'',
                quantity:0,
                totalStock:0,
                units:'',
                price:0,
                description:'',
                company:'',
                count:0
            },
            cartList:[],
            count:0
        }
    }
    addItem=(e)=>{
        let cartList = this.props.cart;
        let stockData = this.props.product;
        let list = this.state.list;
        let found = false;
        let i;
        for(i = 0; i < cartList.length; i++){
            if(cartList[i]._id===stockData._id){
                found=true;
                break;
            }
        }
        if(!found){
            list._id=stockData._id;
            list.image=stockData.image;
            list.category=stockData.category;
            list.title=stockData.title;
            list.quantity=stockData.quantity;
            list.totalStock=stockData.totalStock;
            list.units=stockData.units;
            list.price=stockData.price;
            list.description=stockData.description;
            list.company=stockData.company;
            list.origin=stockData.origin;
            list.count = 1;
            cartList.push(list);
        }
        else{
            cartList[i].count=cartList[i].count+1;
        }
        this.props.cartDispatcher(cartList);
        this.setState({cartList:cartList});
        this.setState({count:cartList[i].count});
    }


    remItem=(e)=>{
        let cartList = this.props.cart;
        let stockData = this.props.product;
        let i;
        for(i = 0; i < cartList.length; i++){
            if(cartList[i]._id===stockData._id){
                break;
            }
        }
        if(cartList[i].count>1){
            cartList[i].count=cartList[i].count-1;
            this.setState({count:cartList[i].count});

        }
        else{
            cartList.splice(i,1)
            this.setState({count:0});
        }
        this.props.cartDispatcher(cartList);
        this.setState({cartList:cartList});
        
    }
    render(){
        const stockData = this.props.product;
        const {cartList} = this.state;
        const {count} = this.state;
        const {currentIndex} = this.state;
        return(
            <div className="container">
                <Navbar/>
                <div className="mt-5 border shadow rounded">
                    <div className="card border-white text-left mx-auto my-auto" style={{width:"92%"}}>
                        <div className="row">
                            <div className="col-lg-5 mx-auto my-auto">
                                <img src={stockData.image} className="img-fluid" alt={stockData.title}/>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-body">
                                    <ul type="none" className="text-left">
                                        <li className="fs-2 text-capitalize fw-bolder">{stockData.title}</li>
                                        <li className="fs-2 text-capitalize fw-bolder">({stockData.quantity} {stockData.units})</li>
                                        <li className="fs-5 text-capitalize text-danger">By {stockData.company}</li>
                                        <li className="fs-5 text-capitalize text-danger">In {stockData.category}</li>
                                        <li className="fs-5">Price: <span className="fs-3 text-danger fw-bolder"> $ {stockData.price}.00</span></li>
                                        <li className="fs-6">Inclusive of all taxes.</li>
                                        <li className="fs-5 text-success">Stock Available</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 my-auto mx-auto">
                                <button className={count===0?"btn btn-danger fs-3 fw-bolder my-auto mx-5":"d-none"} onClick={e=>this.addItem(e)} >Add to Cart <i class="fa fa-shopping-cart"></i></button>
                                <div className={count===0?"d-none":"form-inline mx-5"}>
                                    <button className="btn btn-danger fs-3 fw-bolder my-auto" onClick={e=>this.remItem(e)}>-</button>
                                    <h1 className="p-2">{count}</h1>
                                    <button className="btn btn-danger fs-3 fw-bolder my-auto" onClick={e=>this.addItem(e)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <table>
                        <tr>
                            <td style={{width:"450px"}}><img src={stockData.image} alt={stockData.title} width="300" /></td>
                            <td className="text-left">
                                <h1 className="text-capitalize pt-3 fw-bolder">{stockData.title}</h1>
                                <h1 className="text-capitalize fw-bolder">({stockData.quantity} {stockData.units})</h1>
                                <h3  className="text-danger text-capitalize">From {stockData.company}</h3>                                
                                <h4 className="text-danger text-capitalize">in {stockData.category}</h4>
                                <h4>Price: <span className="fs-3 text-danger fw-bolder"> ₹{stockData.price}.00</span></h4>
                                <h6>Inclusive of all taxes.</h6>
                                <h4 className="text-danger">Stock Available</h4>
                            </td>
                            <td>
                                <button className={count===0?"btn btn-danger m-5 fs-3 fw-bolder":"d-none"} onClick={e=>this.addItem(e)} style={{height:"65px",width:"250px"}} >Add to Cart <i class="fa fa-shopping-cart" style={{fontSize:"30px"}}></i></button>
                                <div className={count===0?"d-none":"form-inline m-5"}>
                                    <button className="btn btn-danger" onClick={e=>this.remItem(e)} style={{height:"60px",width:"60px"}}>-</button>
                                    <h1 className="m-3">{count}</h1>
                                    <button className="btn btn-danger" onClick={e=>this.addItem(e)} style={{height:"60px",width:"60px"}}>+</button>
                                </div>
                            </td>
                        </tr>
                    </table>    */}
                    <table className="w-100 mt-5 mb-5">
                        <tr>
                            <td>
                                <img src={returns} alt="Non-Returnable" id="nr"/>
                                <label for="nr">Non-Returnable</label>
                            </td>
                            <td>
                                <img src={delivery} alt="Free Delivery" />
                                <label>Free Delivery</label>
                            </td>
                            <td><img src={nocontact} alt="No Contact Delivery" />
                                <label>Contactless Delivery</label>
                            </td>
                        </tr>
                    </table>
                    <table className="text-left fs-4 m-5">
                        <tr>
                            <td className="fs-3 fw-bold">Full Product Details</td>
                        </tr>
                        <tr>
                            <td>Name: </td>
                            <td className="text-capitalize">{stockData.title}</td>
                        </tr>
                        <tr>
                            <td>Category: </td>
                            <td className="text-capitalize">{stockData.category}</td>
                        </tr>
                        <tr>
                            <td>Quantity: </td>
                            <td>{stockData.quantity} {stockData.units}</td>
                        </tr>
                        <tr>
                            <td>Description: </td>
                            <td className="text-capitalize">{stockData.description}</td>
                        </tr>
                        <tr>
                            <td>Price: </td>
                            <td className="text-capitalize">${stockData.price}.00</td>
                        </tr>
                        <tr>
                            <td>Manufacturer: </td>
                            <td className="text-capitalize">{stockData.company}</td>
                        </tr>
                        <tr>
                            <td>Country of Origin: </td>
                            <td className="text-capitalize">{stockData.origin}</td>
                        </tr>
                    </table>
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log(state)
    return{
        cart: state.user.cartList,
        product: state.user.productDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        cartDispatcher: (data)=>dispatch({type:"cartList",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);