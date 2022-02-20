// import {SET_USER_NAME} from './actions';

// const initialState = {
//     name:'',
// }

// function userReducer(state = initialState, action){
//     switch(action.type){
//         case SET_USER_NAME:
//             return {...state,name: action.payload};
//         default: 
//             return state;
//     }
// }

// export default userReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialStateVlaue = {name:"",email:"lisa@gmail.com"}

export const userSlice = createSlice({
    name:"user",
    initialState:{value:initialStateVlaue},
    reducers:{
        login:(state,action) =>{
            state.value = action.payload;
        },

        logout: (state)=>{
            state.value = initialStateVlaue
        }


    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;