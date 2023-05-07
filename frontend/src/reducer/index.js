import { combineReducers } from 'redux';
import { UserReducer } from './userReducer'
import { VendorReducer } from './vendorReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    vendor: VendorReducer
})

export default rootReducer;