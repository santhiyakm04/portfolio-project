import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    studioProfile: {

        name_of_founder: "",
        no_of_branches: "",
        no_of_achievements: "",
        no_of_employees: "",
        about_us: "",
        packages: [],
        studio_id: "",
    }

}
export const Profileslice = createSlice({
    name: 'details',

    initialState: initialstate,
    reducers: {

        studio: (state, action) => {
            state.studioProfile = action.payload
        }
    }
})
export const { studio } = Profileslice.actions

export default Profileslice.reducer


