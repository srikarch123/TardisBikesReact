const initialState = {
    cartList:[],
    userLogin:[],
    productDetails:[],
    orderDetails:[],
}

export const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case "cartList":
            return{
                ...state,
                cartList: action.payload
            }
        case "userLogin":
            return{
                ...state,
                userLogin :action.payload
            }
        case "productDetails":
            return{
                ...state,
                productDetails: action.payload
            }
        case "orderDetails":
            return{
                ...state,
                orderDetails: action.payload
            }
        default: return state;
    }
}