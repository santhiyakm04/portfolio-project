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
  // console.log()
  const dispatch = useDispatch()

  const searchparam = new URLSearchParams(window.location.search)
  const param1=searchparam.get('user_id')
  const param2=searchparam.get('studio_id')
  // const param3=searchparam.get('status')



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
      alert("Booked Successfully")
     navigate("/user/viewdetails")
    }
  
  return (
    <div>
      <form>
      <div className="page-header header-filter" filter-color="black">
        <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/pexels-fwstudio-33348-129731.jpg)" }}></div>
        <div className="signup-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
              <h4 className="text-light">LIGHTS ON FOCUS</h4>
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
                      <Link to="/" className='text-light'>Logout</Link>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container">
              <h3 className="text-light">Booking Details</h3>
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <div className="card card-signup">
                    <div className="card-body  cardsize" >
                      <div className="datepicker-container">
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                          </div>
                          <input type="text" className="form-control datepicker" onClick={(e) => dispatch(booking({ ...bookvalue, event_date: e.target.value }))} placeholder="Date" required />
                        </div>
                        <div className="input-group form-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                          </div>
                          <input type="text" className="form-control timepicker" onClick={(e) => dispatch(booking({ ...bookvalue, event_time: e.target.value }))} placeholder="Time" required />
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                        </div>
                        <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, location: e.target.value }))} placeholder="Location" required/>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                        </div>
                        <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, venue: e.target.value }))} placeholder="Venue" required />
                      </div>

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                        </div><select class="form-select form-select-sm form-control" aria-label="Small select example" onClick={(e) => dispatch(booking({ ...bookvalue, event_type: e.target.value }))} required>
                          <option selected>Event Type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Babyshoot">Babyshoot</option>
                          <option value="Puberty">Puberty</option>
                          <option value="Babyshower">Babyshower</option>
                          <option value="Engagement">Engagement</option>
                        </select>

                        {/* <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, eventtype: e.target.value }))} placeholder="Event Type" /> */}
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                        </div><select class="form-select form-select-sm form-control" aria-label="Small select example" onClick={(e) => dispatch(booking({ ...bookvalue, packages: e.target.value }))} required>
                          <option selected>Packages</option>
                          <option value="Basic">Basic</option>
                          <option value="Silver">Silver</option>
                          <option value="Gold">Gold</option>
                          <option value="Platinum">Platinum</option>
                        </select>

                      </div>
                      <div className="p-2">
                        {/* <button class="btn btn-warning" data-toggle="modal" data-target="#myModal1" onClick={submit} >Submit</button> */}
                        <button className="btn btn-success" onClick={submit}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal fade modal-mini modal-light" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="modal-profile bg-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>
              </div>
            </div>
            <div>
              <b className='text-dark m-5'>Booked Successfully</b>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link text-dark " data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
      </form>
    </div>
  )
}