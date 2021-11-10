import {createStore} from "redux";

const reducer =(state={isLoggedIn:false},action)=>{
    if(action.type==="login"){
        localStorage.setItem("basketToken","lksndfkdsnflkdsnflkndslkfndslkfnll23432");
        state.isLoggedIn = true;
    }
    if(action.type==="logout"){
        localStorage.removeItem("basketToken");
        state.isLoggedIn = false;
    }
    return {
        isLoggedIn : state.isLoggedIn
    }
};


const store = createStore(reducer);

export default store;

