import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studioReg:{
       
        name :"",
        email :"" ,
        password :"" ,
        aadhar : "",
        address :"" ,
        phone:"",
        city:"",
        area:"",
        pin:"",
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

      
