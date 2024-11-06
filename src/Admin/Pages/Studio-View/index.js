import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


export const Studio_View=()=>{
      
    const [viewlist, setviewlist] = useState({})
    const { id } = useParams()


    useEffect(() => {
            axios.get(`https://SanthiyaKumarMallika.pythonanywhere.com/viewlist/${id}`).then((viewlist) => {

            setviewlist(viewlist.data.data)
        })
    },[])

    return(
        <div>
            <div className="container-fluid  text-dark">
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Name:</h4>
            <h4 className="col-6">{viewlist.name}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Email:</h4>
            <h4 className="col-6">{viewlist.email}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Password:</h4>
            <h4 className="col-6">{viewlist.password}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Address:</h4>
            <h4 className="col-6">{viewlist.address}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Phone:</h4>
            <h4 className="col-6 ">{viewlist.phone}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">City:</h4>
            <h4 className="col-6">{viewlist.city}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Area:</h4>
            <h4 className="col-6">{viewlist.area}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">PinCode:</h4>
            <h4 className="col-6">{viewlist.pin}</h4>
        </div>
    </div>     
        </div>
    )
}