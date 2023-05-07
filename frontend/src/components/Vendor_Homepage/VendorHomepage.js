import React from 'react'
import * as stockFunction from './vendorStock'
import Navbar from '../NavBar/vendorNavbar'
import { connect } from 'react-redux';

class VendorHomepage extends React.Component{
    constructor(){
        super();
        this.state={
            data:{
                company:''
            },
            stockList:[]
        }
    }
    toAddStock=e=>{
        e.preventDefault();
        this.props.history.push('/upload-stock');
    }
    showStockList=e=>{
        e.preventDefault();
        let data=this.state.data;
        data.company = this.props.vendor.company;
        this.setState({data:data});
        stockFunction.stockSearch(data).then((res)=>{
            console.log(res.data);
            this.setState({stockList:res.data})
        })
    }
    logout=e=>{
        this.props.history.push('/login')
    }
    editStock=(e,data)=>{
        e.preventDefault();
        this.props.editDispatcher(data);
        this.props.history.push('/edit-stock');
    }
    deleteStock=(e,data)=>{
        e.preventDefault();
        stockFunction.deleteStock(data).then((res)=>{
            console.log(res);
        })
        this.props.history.push('/vendor-home')
        alert("Item Deleted");
        window.location.reload();
    }
    render(){
        const {stockList}=this.state;
        return(
            <div className="container">
                <Navbar/>
                <div className="row pt-5">
                    <div className="col">
                        <div class="d-grid gap-2">
                            <button className="btn btn-danger shadow-lg rounded" style={{minHeight:"80px"}} name="Bikes" value="Bikes" onClick={e=>this.showStockList(e)}>View Your Stock</button>
                        </div>
                    </div>
                    <div className="col">
                        <div class="d-grid gap-2">
                            <button className="btn btn-danger shadow-lg rounded" style={{minHeight:"80px"}} name="vegetables" value="vegetables" onClick={e=>this.toAddStock(e)}>Add New Stock</button>
                        </div>
                    </div>
                </div>
                    {
                        Object.keys(stockList).map(itemkey=>{
                            return(
                                <div>
                                    <div className="card mb-3 w-75 border border-danger shadow-lg rounded text-left mx-auto col-md-6 mt-4" style={{maxWidth:'720px'}}>
                                        <div className="row">
                                            <div className="col-md-4 m-auto">
                                                <img src={stockList[itemkey].image} className="img-fluid rounded-start" alt={stockList[itemkey].title}/>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="card-body">
                                                    <ul type="none" className="text-left">
                                                        <li className="fs-2 text-capitalize fw-bolder">{stockList[itemkey].title}</li>
                                                        <li className="fs-4 text-capitalize">Type: {stockList[itemkey].category}</li>
                                                        <li className="font-weight-bold">Price: ${stockList[itemkey].price}/{stockList[itemkey].units}</li>
                                                        <li className="text-capitalize">About: {stockList[itemkey].description}</li>
                                                        <li className=" text-capitalize">By {stockList[itemkey].company}</li>
                                                        <li className="text-danger">Stock Available: {stockList[itemkey].totalStock}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 my-auto mx-auto text-center">
                                                <button type="button" className="btn btn-danger" onClick={e=>this.editStock(e,stockList[itemkey])}>Edit Stock</button><br/>
                                                <button type="button" className="btn btn-danger my-4" onClick={e=>this.deleteStock(e,stockList[itemkey])}>Delete Stock</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }  
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state.vendor.vendorLogin);
    return{
        vendor: state.vendor.vendorLogin
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editDispatcher: (data)=>dispatch({type:"editDetails",payload:data})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(VendorHomepage);