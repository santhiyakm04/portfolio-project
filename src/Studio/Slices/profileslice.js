import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studioProfile:{
       
        name_of_founder :"",
        no_of_branches :"" ,
        no_of_branches :"" ,
        no_of_achievements : "",
        about_us :"" ,
        amount_for_basic_packages :"",
        amount_for_silver_packages :"",
        amount_for_gold_packages :"",
        amount_for_platinum_packages :"",
}
}
      export const Profileslice = createSlice({
                                            name:'details',
                                           
                                            initialState :initialstate,
                                            reducers:{
                                               
                                                studio:(state,action)=>{
                                                    state.studioReg=action.payload
                                                }
                                            }
                                            })
                                            export const {studio} = Profileslice.actions
                                            
                                            export default Profileslice.reducer

      
