import './index.css'
import { booking } from "../../Slices/new"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"



export const Book_Details = () => {

  const navigate = useNavigate()
  const bookdetail = useSelector((state) => state.book)
  const bookvalue = bookdetail.book_details
  const dispatch = useDispatch()

  const searchparam = new URLSearchParams(window.location.search)
  const param1=searchparam.get('user_id')
  const param2=searchparam.get('studio_id')
  // const param3=searchparam.get('status')
  
  const logout=()=>{
    localStorage.removeItem("user_token")
    navigate("/")
  }


  const submit = () => {

    const formData = new FormData();

    formData.append("event_date",bookvalue.event_date)
    formData.append("event_time",bookvalue.event_time)
    formData.append("location",bookvalue.location)
    formData.append("venue",bookvalue.venue)
    formData.append("event_type",bookvalue.event_type)
    formData.append("packages",bookvalue.packages)
    formData.append("user_id",param1)
    formData.append("studio_id",param2)
    // formData.append("status",param3)

    axios.post("http://santhiyakumarmallika.pythonanywhere.com/userbooking",formData).then((res)=>{
      })
      .catch((error) => { 
               
        if (error.response && error.response.status === 401 || error.response.status === 422) { 
          // return <Navigate to="/user/login"/> 
          window.location.href = '/';  
        } else { 
          console.error('Error fetching doctor data:', error); 
        } 
      });
      alert("Booked Successfully")
     navigate("/user/viewdetails")
    }
  
  return (
    <div>
      <form>
      <div className="page-header header-filter" filter-color="black">
        <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/pexels-chudin-alexey-20184351.jpg)" }}></div>
        <div className="signup-page sidebar-collapse">
          <nav className= "navbar-expand-lg bg-warning p-2">
            <div className="container">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
              <div className="collapse navbar-collapse" id="example-navbar-icons">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/user/studiolist" className='text-light'>Home</Link>

                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <button onClick={logout} className="btn-primary text-light border-light">Logout</button>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container">
              <h3 className="text-light m-3">Booking Details</h3>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  {/* <div className="card card-signup"> */}
                    {/* <div className="card-body  cardsize" > */}
                      <div className="datepicker-container">
                        <div className="input-group no-border input-lg m-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text text-light"><i className="now-ui-icons users_circle-08"></i></span>
                          </div>
                          <input type="date" className="form-control text-light" onClick={(e) => dispatch(booking({ ...bookvalue, event_date: e.target.value }))} placeholder="Date" required />
                        </div>
                        <div className="input-group no-border input-lg m-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text text-light"><i className="now-ui-icons users_circle-08"></i></span>
                          </div>
                          <input type="time" className="form-control text-light" onClick={(e) => dispatch(booking({ ...bookvalue, event_time: e.target.value }))} placeholder="Time" required />
                        </div>
                      </div>
                      <div className="input-group no-border input-lg m-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text  text-light"><i className="now-ui-icons users_circle-08"></i></span>
                        </div>
                        <input type="text" className="form-control text-light" onKeyUp={(e) => dispatch(booking({ ...bookvalue, location: e.target.value }))} placeholder="Location" required/>
                      </div>
                      <div className="input-group no-border input-lg m-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text text-light"><i className="now-ui-icons users_circle-08"></i></span>
                        </div>
                        <input type="text" className="form-control text-light" onKeyUp={(e) => dispatch(booking({ ...bookvalue, venue: e.target.value }))} placeholder="Venue" required />
                      </div>

                      <div className="input-group no-border input-lg m-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text  text-light"><i className="now-ui-icons users_circle-08"></i></span>
                        </div><select class="form-select form-select-sm form-control text-light" aria-label="Small select example" onClick={(e) => dispatch(booking({ ...bookvalue, event_type: e.target.value }))} required>
                          <option selected>Event Type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Babyshoot">Babyshoot</option>
                          <option value="Puberty">Puberty</option>
                          <option value="Babyshower">Babyshower</option>
                          <option value="Engagement">Engagement</option>
                        </select>
                      </div>
                      <div className="input-group no-border input-lg m-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text  text-light"><i className="now-ui-icons users_circle-08"></i></span>
                        </div><select class="form-select form-select-sm form-control text-light" aria-label="Small select example" onClick={(e) => dispatch(booking({ ...bookvalue, packages: e.target.value }))} required>
                          <option selected>Packages</option>
                          <option value="Basic">Basic</option>
                          <option value="Silver">Silver</option>
                          <option value="Gold">Gold</option>
                          <option value="Platinum">Platinum</option>
                        </select>
                    </div>
                      <div className="p-2">
                        <button className="btn btn-success" onClick={submit}>Submit</button>
                      </div>
                    </div>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}