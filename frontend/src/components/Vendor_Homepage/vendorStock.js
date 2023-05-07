import axios from 'axios'

let url='http://localhost:4500/vendor-stock'
let url1='http://localhost:4500/delete-stock'

export function stockSearch(title){
    return axios.post(url,title);
}

export function deleteStock(data){
    return axios.post(url1,data);
}