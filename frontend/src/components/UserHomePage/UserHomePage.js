import React from 'react';
import './userHomepage.css'
import * as stockSearchFunction from './stockSearch';
import bikes from './images/bikes.jpeg';
import parts from './images/parts.jpeg'
import accessories from './images/acc.jpeg'
import Navbar from '../NavBar/userNavbar'
import {connect} from 'react-redux';
import videoBg from '../UserHomePage/videos/intro-video.mp4';

class UserHomepage extends React.Component{
    constructor(){
        super();
        this.state={
            data:{
                search:''
            },
            dataList:[],
            showHome:true
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        let data = this.state.data;
        data.search=e.target.value;
        this.setState({data:data});
    }
    handleCatChange=(e)=>{
        e.preventDefault();
        let data = this.state.data;
        data.search=e.target.value;
        this.setState({data:data})
        stockSearchFunction.stockSearch(this.state.data).then((res)=>{
            this.setState({dataList:res.data});
        })
        this.setState({showHome:false});
    }
    handleSearch=(e)=>{
        e.preventDefault();
        stockSearchFunction.stockSearch(this.state.data).then((res)=>{
            this.setState({dataList:res.data});
        })
        this.setState({showHome:false});
    }
    productPage=(e,list)=>{
        //let data = JSON.stringify(list);
        //localStorage.setItem('productPage',data);
        this.props.productDetailsDispatcher(list)
        this.props.history.push('/product-page');
    }
    render(){
        let {dataList}=this.state;
        return(
            
            <div className="container">
                <Navbar/>
                <div className="pt-3">
                    <form onSubmit={e=>this.handleSearch(e)}>
                        <div class="input-group mb-3 shadow rounded">
                            <input type="text" class="form-control" placeholder="Search By Name, Category, Brand" id="searchBox" name="search" onChange={e=>this.handleChange(e)} />
                            <button class="btn btn-outline-danger" type="submit" style={{width:"120px",fontSize:"20px"}}>Search</button>
                        <div className='Main'>
                             <video src={videoBg} autoPlay loop muted />
                        </div>
                        </div>
                    </form>
                </div>
                <div className={this.state.showHome?"d-none":"d-block"}>
                    <div className={dataList.length===0?"d-none":"d-block"}>
                    {
                        Object.keys(dataList).map(itemkey=>{
                            return(
                                <div>
                                    <div className="card mb-3 w-75 border border-danger shadow-lg rounded text-left mx-auto col-md-6" style={{maxWidth:'720px'}}>
                                        <div className="row">
                                            <div className="col-md-4 m-auto">
                                                <img src={dataList[itemkey].image} className="img-fluid rounded-start" alt={dataList[itemkey].title}/>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="card-body">
                                                    <ul type="none" className="text-left">
                                                        <li className="fs-2 text-capitalize fw-bolder">{dataList[itemkey].title}</li>
                                                        <li className="fs-4 text-capitalize">Type: {dataList[itemkey].category}</li>
                                                        <li className="font-weight-bold">Price: $ {dataList[itemkey].price}/{dataList[itemkey].units}</li>
                                                        {/* <li className="text-capitalize">About: {dataList[itemkey].description}</li> */}
                                                        <li className=" text-capitalize">By {dataList[itemkey].company}</li>
                                                        <li className={dataList[itemkey].totalStock?"text-danger":"d-none"}>Stock Available</li>
                                                        <li className={dataList[itemkey].totalStock?"d-none":"text-danger"}>Stock Unavailable</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 my-auto mx-auto text-center">
                                                <button type="button" className={dataList[itemkey].totalStock?"btn btn-danger fs-5 mb-2":"d-none"} onClick={e=>this.productPage(e,dataList[itemkey])}>View Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className={dataList.length===0?"d-block":"d-none"}>
                        <h3 className="p-5">No Products Found</h3>
                    </div>
                </div>
                <div className={this.state.showHome?"d-block":"d-none"}>
                    <div className="row pt-5">
                        <div className="col-sm-4">
                            <div className="shadow-lg rounded">
                                <img src= {bikes} alt="Bikes" className="mx-auto img-fluid rounded-start" style={{maxHeight:"310px"}} />
                                <div class="d-grid gap-2">
                                    <button className="btn btn-danger d-block" name="Bikes" value="Bikes" onClick={e=>this.handleCatChange(e)}>Bikes</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="shadow-lg rounded">
                                <img src={parts} alt="Parts" className="mx-auto img-fluid rounded-start" style={{Height:"310px"}}/>
                                <div class="d-grid gap-2">
                                    <button className="btn btn-danger d-block" name="Parts" value="Parts" onClick={e=>this.handleCatChange(e)}>Parts</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="shadow-lg rounded">
                                <img src={accessories} alt="Accessories" className="mx-auto img-fluid rounded-start" style={{maxHeight:"310px"}}/>
                                <div class="d-grid gap-2">
                                    <button className="btn btn-danger d-block" name="Accessories" value="Accessories" onClick={e=>this.handleCatChange(e)}>Accessories</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log(state);
    return{
        logindata: state.user.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        productDetailsDispatcher:(data)=>dispatch({type:"productDetails",payload:data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomepage);
