import React from 'react'
import './editStock.css'
import axios from 'axios';
import Navbar from '../NavBar/vendorNavbar'
import { connect } from 'react-redux';
import FormItems from '../Reusable/FormItems'

class EditStock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            stockData:this.props.edit,
            errors:{
                image:'',
                category:'',
                title:'',
                quantity:'',
                totalStock:'',
                units:'',
                price:'',
                description:'',
                origin:''            
            },
            form:{
                image:{
                    elementType:'input',
                    elementConfig:{
                        type:'file',
                        id:'image',
                        name:'Upload Image',
                        accept:'.png, .jpg, .jpeg',
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:''
                },
                category:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'category',
                        name:'Category',
                        placeholder:"Enter Category",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:''
                },
                title:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'title',
                        name:'Title',
                        placeholder:"Enter Title",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:''
                },
                quantity:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'quantity',
                        name:'Quantity',
                        placeholder:"Enter Quantity",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:0
                },
                totalStock:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'totalStock',
                        name:'totalStock',
                        placeholder:"Enter Total Stock",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:0
                },
                units:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'units',
                        name:'Units',
                        placeholder:"Enter Units",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:''
                },
                price:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'price',
                        name:'Price',
                        placeholder:"Enter Price",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:0
                },
                description:{
                    elementType:'textarea',
                    elementConfig:{
                        rows:2,
                        id:'description',
                        name:'Description',
                        placeholder:"Enter Description",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:''
                },
                origin:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'origin',
                        name:'Origin',
                        placeholder:"Enter Origin",
                        onChange:e=>this.handleChange(e)
                    },
                    elementValue:0
                }
            }
        }
    }

    handleChange=e=>{
        e.preventDefault();
        const {id,value}=e.target;
        let stockData = this.state.stockData;
        let errors = this.state.errors;
        switch(id){
            case 'image':
                if(!value){
                    errors.image="Please Upload a Image"
                }
                else{
                    errors.image="";
                    const file = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function(f){
                        const img = document.getElementById('img');
                        img.src=f.target.result;
                        stockData.image=f.target.result;
                    }
                    const  i = reader.readAsDataURL(file);
               }
                break;
            case 'category':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.category="Enter only characters";
                    }
                    else{
                        errors.category='';
                        stockData.category=value;
                    }
                }
                else{
                    errors.category="Enter Category"
                }
                break;
            case 'title':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.title="Enter only characters";
                    }
                    else{
                        errors.title='';
                        stockData.title=value;
                    }
                }
                else{
                    errors.title="Enter a Title"
                }
                break;
            case 'quantity':
                if(value.length>0){
                    if(!/^\d{0,5}$/.test(value)){
                        errors.quantity="Enter only Digits & Min 5 Digits";
                    }
                    else{
                        errors.quantity="";
                        stockData.quantity=value;
                    }
                }
                else{
                    errors.quantity="Enter quantity"
                }
                break;
            case 'totalStock':
                if(value.length>0){
                    if(!/^\d{0,5}$/.test(value)){
                        errors.totalStock="Enter only Digits & Max 5 Digits";
                    }
                    else{
                        errors.totalStock="";
                        stockData.totalStock=value;
                    }
                }
                else{
                    errors.totalStock="Enter Total Stock"
                }
                break;
            case 'units':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.units="Enter only characters";
                    }
                    else{
                        errors.units='';
                        stockData.units=value;
                    }
                }
                else{
                    errors.units="Enter Units";
                }
                break;            
            case 'price':
                if(value.length>0){
                    if(!/^\d{0,5}$/.test(value)){
                        errors.price="Enter only Digits & min 5 digits";
                    }
                    else{
                        errors.price="";
                        stockData.price=value;
                    }
                }
                else{
                    errors.price="Enter price"
                }
                break;
            case 'description':
                if(value.length>0){
                    if(!(value)){
                        errors.description="Enter only characters";
                    }
                    else{
                        errors.description='';
                        stockData.description=value;
                    }
                }
                else{
                    errors.description="Enter description";
                }
                break;
            case 'title':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.title="Enter only characters";
                    }
                    else{
                        errors.title='';
                        stockData.title=value;
                    }
                }
                else{
                    errors.title="Enter a Title"
                }
                break;
            case 'title':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.title="Enter only characters";
                    }
                    else{
                        errors.title='';
                        stockData.title=value;
                    }
                }
                else{
                    errors.title="Enter a Title"
                }
                break;
            case 'origin':
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.origin="Enter only characters";
                    }
                    else{
                        errors.origin='';
                        stockData.origin=value;
                    }
                }
                else{
                    errors.origin="Enter a Origin"
                }
                break;
            default:
                break;            
        }
        stockData.company=localStorage.getItem('company_name');
        this.setState({stockData:stockData});
        this.setState({errors:errors})
    }
    submitData = e=>{
        e.preventDefault();
        const {errors}=this.state;
        const {stockData}=this.state;
        if(errors.image.length===0 && errors.category.length===0 && errors.title.length===0 && errors.quantity.length===0 && errors.totalStock.length===0 && errors.price.length===0 && errors.description.length===0 && errors.units.length===0){
            axios.post('http://localhost:4500/stock-update',stockData).then((res)=>{
                console.log(res);
            })
            this.props.history.push('/vendor-home')            
        }
        else{
            alert("Enter Valid Details")
        }
    }
    render(){
        const {errors}=this.state;
        const {stockData}=this.state;
        let formElements = [];
        for(let key in this.state.form){
            formElements.push({
                id:key,
                config:this.state.form[key]
            })
        }
        return(
            <div className="container">
                <Navbar/>
                <h1 className="p-4">Edit Stock</h1>
                <form onSubmit={e=>this.submitData(e)} className="w-50 mx-auto">
                    {formElements && formElements.map((formElement)=>
                        <div>
                            {errors[formElement.id].length>0 && <span className="text-danger fw-bolder">*{errors[formElement.id]}*</span>}
                            <FormItems key={formElement.id} config={formElement.config} elementValue={formElement.id==="image"?'':stockData[formElement.id]}/>
                            {formElement.id==='image'?<img src={stockData.image} id="img" alt="" height="200px" className="shadow rounded my-3 img-fluid rounded-start" />:''}                 
                        </div>
                        )}
                    <button type="submit" className="btn btn-danger">Submit</button><br/>
                </form>
            </div>            
        )
    }
}

const mapStateToProps = state =>{
    return{
        edit: state.vendor.editDetails
    }
}


export default connect(mapStateToProps)(EditStock);