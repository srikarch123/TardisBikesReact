import React from 'react';
import './signup.css';
import * as signupFunction from './signupFunction'
import Navbar from '../NavBar/homeNavbar'
import FormItems from '../Reusable/FormItems'

export default class VendorSignup extends React.Component{
    constructor(){
        super();
        this.state={
            userData:{
                name:'',
                email:'',
                mobile:'',
                company:'',
                password:'',
                address:''
            },
            errors:{
                name:'',
                email:'',
                mobile:'',
                company:'',
                password:'',
                address:''
            },
            visited:{
                name:false,
                email:false,
                mobile:false,
                company:false,
                password:false,
                address:false
            },
            form:{
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'name',
                        name:'Name',
                        placeholder:"Enter Your Name",
                        onChange:e=>this.handleChange(e)
                    }
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'email',
                        name:'Email',
                        placeholder:"Enter Your email",
                        onChange:e=>this.handleChange(e)
                    }
                },
                mobile:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'mobile',
                        name:'Mobile',
                        placeholder:"Enter Your Mobile",
                        onChange:e=>this.handleChange(e)
                    }
                },
                company:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'company',
                        name:'Company Name',
                        placeholder:"Enter Your Company Name",
                        onChange:e=>this.handleChange(e)
                    }
                },
                password:{
                    elementType:'input',
                    elementConfig:{
                        type:'password',
                        id:'password',
                        name:'Password',
                        placeholder:"Enter Your Password",
                        onChange:e=>this.handleChange(e)
                    }
                },
                address:{
                    elementType:'textarea',
                    elementConfig:{
                        rows: 2,
                        id:'address',
                        name:'Address',
                        placeholder:"Enter Your Address",
                        onChange:e=>this.handleChange(e)
                    }
                },
            }
        }
    }
    handleChange=e=>{
        e.preventDefault();
        let visited=this.state.visited;
        const {id,value}=e.target;
        let userData = this.state.userData;
        let errors = this.state.errors;
        switch(id){
            case 'name':
                visited.name=true;
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.name="Enter only characters";
                    }
                    else{
                        errors.name='';
                        userData.name=value;
                    }
                }
                else{
                    errors.name="Enter Name"
                }
                break;
            case 'email':
                visited.email=true;
                if(value.length>0){
                    if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
                        errors.email="Enter valid email"
                    }
                    else{
                        errors.email=""
                        userData.email=value;
                    }
                }
                else{
                    errors.email='Enter Password';
                }
                break;
            case 'company':
                visited.company=true;
                if(value.length>0){
                    if(!/^[A-Za-z ]+$/.test(value)){
                        errors.company="Enter only characters";
                    }
                    else{
                        errors.company='';
                        userData.company=value;
                    }
                }
                else{
                    errors.company="Enter Company Name"
                }
                break;
            case 'mobile':
                visited.mobile=true;
                if(value.length>0){
                    if(!/^\d{10}$/.test(value)){
                        errors.mobile="Enter 10 Digits";
                    }
                    else{
                        errors.mobile="";
                        userData.mobile=value;
                    }
                }
                else{
                    errors.mobile="Enter mobile number"
                }
                break;
            case 'password':
                visited.password=true;
                if(value.length>0){
                    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)){
                        errors.password="Enter valid password";
                    }
                    else{
                        errors.password="";
                        userData.password=value;
                    }
                }
                else{
                    errors.password="Enter password"
                }
                userData.password=value;
                break;
            case 'address':
                visited.address=true;
                if(!value){
                    errors.address='Enter Address'
                }
                else{
                    errors.address=''
                    userData.address=value;
                }
            break;
            default:
                break;                
        }
        this.setState({userData:userData});
        this.setState({errors:errors});
        this.setState({visited:visited});
    }
    submitData = e=>{
        e.preventDefault();
        const {errors}=this.state;
        const {visited}=this.state;
        if(visited.name && visited.email && visited.password && visited.company && visited.mobile && visited.address){
            if(errors.name.length===0 && errors.email.length===0 && errors.password.length===0 && errors.company.length===0 && errors.address.length===0 && errors.mobile.length===0){
                signupFunction.signupVendor(this.state.userData).then(res=>res.data);
                this.props.history.push('/login');
            }
            else{
                alert("Enter Valid Details")
            }
        }
        else{
            alert("Please Fill the Form");
        }
    }
    render(){
        const {errors}=this.state;
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
                <div className="mx-auto m-5 p-5 border text-center shadow-lg rounded">
                    <h3 className="fw-bolder pb-3">VENDOR SIGN-UP</h3>
                    <form onSubmit={e => this.submitData(e)}>
                        {formElements && formElements.map((formElement)=>
                            <div>
                                {errors[formElement.id].length>0 && <span className="text-danger fw-bolder">*{errors[formElement.id]}*</span>}
                                <FormItems key={formElement.id} config={formElement.config} />                  
                            </div>
                            )}
                        <button type="submit" id="button" className="btn btn-danger">Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}