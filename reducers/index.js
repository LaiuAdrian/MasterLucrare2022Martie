import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import persistConfig from '../config/reduxConfig';


// User Reducer
const umsUserData={
    umsUserData:[]
}
const user = (state = umsUserData,action) =>{
    switch (action.type) {
        case 'GET_LOGGED_UMS_USER_DATA':
            return{
                umsUserData:action.payload
            }          
        default:
            return state
    }
}




const rootReducer = combineReducers({
    user:persistReducer(persistConfig,user),
});


export default rootReducer
