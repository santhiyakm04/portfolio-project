import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studiolog:{
       
     
        email :"" ,
        password :"" ,
       
}
}
      export const Loginslice = createSlice({
                                            name:'logs',
                                           
                                            initialState :initialstate,
                                            reducers:{
                                               
                                                userlog:(state,action)=>{
                                                    state.studiolog=action.payload
                                                }
                                            }
                                            })
                                            export const {userlog} = Loginslice.actions
                                            
                                            export default Loginslice.reducer

      
