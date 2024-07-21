import { createSlice } from '@reduxjs/toolkit';
import { userLocal } from '../../services/localService';

const initialState = {
    userInfo: userLocal.get(),
    infoUserData:{},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
postLoginAction:(state,actions)=> {
console.log('info user',actions.payload)
state.userInfo=actions.payload;
userLocal.set(actions.payload);
},
postLogOutAction:(state,actions)=> {
state.userInfo='';
userLocal.remove();
},
getInfoUser:(state,actions)=> {
  state.infoUserData=actions.payload;
  
  },


},
});

export const {postLoginAction,postLogOutAction,getInfoUser} = userSlice.actions;

export default userSlice.reducer;