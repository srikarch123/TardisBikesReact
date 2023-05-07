import React from 'react';
import './signup.css';
import * as signupFunction from './signupFunction'
import Navbar from '../NavBar/homeNavbar'
import FormItems from '../Reusable/FormItems'

export default class UserSignup extends React.Component{
    constructor(){
        super();
        this.state={
            userData:{
                name:'',
                email:'',
                mobile:'',
                password:'',
                dob:'',
                gender:'',
                address:''
            },
            errors:{
                name:'',
                email:'',
                mobile:'',
                password:'',
                dob:'',
                gender:'',
                address:''
            },
            visited:{
                name:false,
                email:false,
                mobile:false,
                password:false,
                dob:false,
                gender:false,
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
                dob:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        id:'dob',
                        name:'Date of Birth',
                        placeholder:"DD-MM-YYYY",
                        onChange:e=>this.handleChange(e)
                    }
                },
                gender:{
                    elementType:'radio',
                    elementConfig:{
                        radios:[
                            {id:'male',value:'male',name:'gender',onChange:e=>this.handleChange(e)},
                            {id:'female',value:'female',name:'gender',onChange:e=>this.handleChange(e)}
                        ],
                        id:'gender',
                    }
                }
            }
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        let visited=this.state.visited;
        let id = e.target.id;
        let value = e.target.value;
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
            case 'dob':
                visited.dob=true;
                if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value)){
                    errors.dob="Enter Date of Birth";
                }
                else{
                    errors.dob="";
                    userData.dob=value;
                }
                break;
            case 'male'||'female':
                visited.gender=true;
                if(!(value==='male'||value==='female')){
                    errors.gender='Select a Gender'
                }
                else{
                    errors.gender='';
                    userData.gender=value;
                }
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
        this.setState({errors:errors})
        this.setState({visited:visited})
    }
    submitData = e=>{
        e.preventDefault();
        const {errors}=this.state;
        const {visited}=this.state;
        if(visited.name && visited.email && visited.password && visited.dob && visited.gender && visited.mobile && visited.address){
            if(errors.name.length===0 && errors.email.length===0 && errors.password.length===0 && errors.dob.length===0 && errors.gender.length===0 && errors.mobile.length===0 && errors.address.length===0){
                signupFunction.signupUser(this.state.userData).then(res=>res.data);
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
        let formElements = [];
        for(let key in this.state.form){
            formElements.push({
                id:key,
                config:this.state.form[key]
            })
        }
        const {errors}=this.state;
        return(
            <div className="container">
                <Navbar/>
                <div className="mx-auto m-5 p-5 border text-center shadow-lg rounded">
                    <h3 className="fw-bolder mb-4">USER SIGN-UP</h3>
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