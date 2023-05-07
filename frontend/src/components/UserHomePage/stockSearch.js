import axios from 'axios'

let url='http://localhost:4500/stock-search'

export function stockSearch(data){
    return axios.post(url,data);
}