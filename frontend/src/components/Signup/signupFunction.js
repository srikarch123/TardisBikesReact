import axios from 'axios'

let url='http://localhost:4500/user-signup'
let url1='http://localhost:4500/vendor-signup'

export function signupUser(newUserData){
    return axios.post(url,newUserData);
}

export function signupVendor(newVendorData){
    return axios.post(url1,newVendorData);
}