import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface initialProps{
    loading:boolean;
    language:"my"|"en"
}


const initialState:initialProps ={
    loading:false,
    language:"my"
}


export const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers:{
      setLang:(state,action:PayloadAction<"en"|"my">)=>{
        state.language=action.payload
      },
      setloading:(state,action:PayloadAction<boolean>)=>{
        state.loading=action.payload
      }
    }
})


export const {setLang,setloading} = commonSlice.actions

export default commonSlice.reducer