import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    studioupdates:{
       
        update_status :"",
       
}
}
      export const Updateslice = createSlice({
                                            name:'updates',
                                           
                                            initialState :initialstate,
                                            reducers:{
                                               
                                                studio_update:(state,action)=>{
                                                    state.studioReg=action.payload
                                                }
                                            }
                                            })
                                            export const {studio_update} = Updateslice.actions
                                            
                                            export default Updateslice.reducer

      
