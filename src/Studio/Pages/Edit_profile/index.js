// import './index.css'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { editstudio } from '../../Slices/Editprofileslice'
// import { editpack } from '../../Slices/Editprofileslice'

// export const Studio_Order = () => {


//     const det = useSelector((state) => state.details).studioupdate;
//     const dispatch = useDispatch();
    
    

//     const [profile, setprofile] = useState([])
//     const profileedit = () => {
        
//             axios.get("https://agaram.academy/api/action.php?request=studio_getBookingDetails").then((n) => {
            
//             setorder(n.data.data)
//             setsearch(n.data.data)
            
//         })
//     }
//     useEffect(() => {
//         profileedit()
//     },[])
    
//     const [packages, setPackages] = useState({ name: "", amount: "" })
//     const userdetail = () => {
//         // dispatch(pack([...det.packages, packages]))

//         let formData = new FormData()
//         formData.append("name_of_founder", det.name_of_founder)
//         formData.append("no_of_branches", det.no_of_branches)
//         formData.append("no_of_achievements", det.no_of_achievements)
//         formData.append("no_of_employees", det.no_of_employees)
//         formData.append("about_us", det.about_us)
//         formData.append("packages", JSON.stringify(det.packages))
//         formData.append("studio_id", logup.data.id)

//         axios.post("https://agaram.academy/api/action.php?request=studio_update_profile", formData).then((e) => {
//             // console.log(e)
//             alert("upload profile sucessfully")
//         })
//     }
   




// }