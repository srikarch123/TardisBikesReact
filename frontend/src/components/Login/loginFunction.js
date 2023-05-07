import axios from 'axios'
let url='http://localhost:4500/user-login'
let url1='http://localhost:4500/vendor-login'
export function user_login(email,password) {
    return axios.post(url,{email,password});
}
export function vendor_login(email,password){
    return axios.post(url1,{email,password});
}

export function userLoginData(){
    return axios.get(url);
}