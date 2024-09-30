import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studioReg:{
       
       studio_name :"",
       studio_email :"" ,
        password :"" ,
        studio_address :"" ,
        studio_number:"",
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

      
