import { useSelector } from "react-redux"


export const View_Details=()=>{
    
    const bookdetail=useSelector((state)=>state.book)
    const bookvalue=bookdetail.book_details
    
     return(
      
     <div classNameName="text-center">
      <div className="col-md-8 m-5 mx-auto">
                <div className="card card-pricing" data-background-color="orange">
                  <div className="card-body">
                    <h3>Booking Details</h3>
                    <ul>
                      <li><b>{bookvalue.name}</b></li>
                      <li><h5>{bookvalue.email}</h5></li>
                      <li><h5>{bookvalue.phone}</h5></li>
                      </ul>
                      <ul>
                      <h3>Event Details</h3>
                      <li><h5>{bookvalue.bridename}</h5></li>
                      <li><h5>{bookvalue.groomname}</h5></li>
                      <li><h5>{bookvalue.date}</h5></li>
                      <li><h5>{bookvalue.time}</h5></li>
                      <li><h5>{bookvalue.location}</h5></li>
                      <li><h5>{bookvalue.venue}</h5></li>
                      <li><h5>{bookvalue.eventtype}</h5></li>
                    </ul>
                  </div>
                </div>
              </div>
     </div>)
}