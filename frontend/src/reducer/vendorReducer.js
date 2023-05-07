const initialState = {
    vendorLogin:[],
    editDetails:[]
}

export const VendorReducer = (state = initialState, action)=>{
    switch(action.type){
        case "vendorLogin":
            return{
                ...state,
                vendorLogin: action.payload
            }
        case "editDetails":
            return{
                ...state,
                editDetails: action.payload
            }
        default: return state;
    }
}