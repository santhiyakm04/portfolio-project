import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studioReg:{
       
       name :"",
       email :"" ,
        password :"" ,
        address :"" ,
        phone:"",
        city:"",
        area:"",
        pin:"",
        status:""
}
}
      export const Registerslice = createSlice({
                                            name:'regis',
                                           
                                            initialState :initialstate,
                                            reducers:{
                                               
                                                user:(state,action)=>{
                                                    state.studioReg=action.payload
                                                }
                                            }
                                            })
                                            export const {user} = Registerslice.actions
                                            
                                            export default Registerslice.reducer

      
