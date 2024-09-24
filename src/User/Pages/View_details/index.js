import { useSelector } from "react-redux"


export const View_Details=()=>{
    
    const bookdetail=useSelector((state)=>state.book)
    const bookvalue=bookdetail.book_details
    
     return(<div className="text-center">
        <h2>Booking Details</h2>
       <h3>{bookvalue.name}</h3>
       <h3>{bookvalue.email}</h3>
       <h3>{bookvalue.address}</h3>
       <h3>{bookvalue.phone}</h3>
       <h3>{bookvalue.city}</h3>
       <h3>{bookvalue.area}</h3>
       <h2>Event Details</h2>
       <h3>{bookvalue.bridename}</h3>
       <h3>{bookvalue.groomname}</h3>
       <h3>{bookvalue.date}</h3>
       <h3>{bookvalue.time}</h3>
       <h3>{bookvalue.location}</h3>
       <h3>{bookvalue.venue}</h3>
       <h3>{bookvalue.eventtype}</h3>
     </div>)
}