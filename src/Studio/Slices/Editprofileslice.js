import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  editProfile: {

        name_of_founder: "",
        no_of_branches: "",
        no_of_achievements: "",
        no_of_employees: "",
        about_us: "",
        packages: [],
        studio_id: "",
    }

}
export const Editslice = createSlice({
    name: 'update',

    initialState: initialstate,
    reducers: {

        editstudio: (state, action) => {
            state.editProfile = action.payload
        },
        editpack:(state,action)=>{
            state.editProfile.packages = action.payload

        }
    }
})
export const { editstudio,editpack } = Editslice.actions

export default Editslice.reducer