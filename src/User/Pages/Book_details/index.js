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
 
      const searchparam=new URLSearchParams(window.location.search)
      const param1=searchparam.get('user_id')
      const param2=searchparam.get('studio_id')
      const param3=searchparam.get('status')

    

    const submit = () => {

        const formData=new FormData();
       
        formData.append("event_date",bookvalue.event_date)
        formData.append("event_time",bookvalue.event_time)
        formData.append("location",bookvalue.location)
        formData.append("venue",bookvalue.venue)
        formData.append("event_type",bookvalue.event_type)
        formData.append("package",bookvalue.package)
        formData.append("user_id",param1)
        formData.append("studio_id",param2)
        formData.append("status",param3)
        
        axios.post("https://agaram.academy/api/action.php?request=studio_create_booking",formData).then((res)=>{
            console.log(res.data.data)
        })
        alert("Booked successfully")
        
    }
   

    return (
        <div>
                    <div className="page-header header-filter" filter-color="black">
                    <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/pexels-fwstudio-33348-129731.jpg)" }}></div>
                    <div className="signup-page sidebar-collapse">
            <nav className="navbar navbar-expand-lg bg-warning p-3">
                <div className="container">
                  {/* <h4 className="text-light">PORTFOLIO</h4> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="example-navbar-icons">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i className="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/user_login" className='text-dark m-5'>Logout</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
                     {/* <div className="content">
                    <div className="container">
                    <h3 className="text-light">Booking Details</h3>
                            <div className="row">
                                <div className="col-md-4 mx-auto">
                                    <div className="card card-signup">
                                        <div className="card-body  cardsize" >
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="date" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue,event_date: e.target.value }))} placeholder="Data" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="time" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, event_time: e.target.value }))} placeholder="Time" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, location: e.target.value }))} placeholder="Location" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, venue: e.target.value }))} placeholder="Venue" />
                                            </div>
                                        
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div><select class="form-select form-select-sm form-control" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, event_type: e.target.value }))}>
                                                    <option selected>Event Type</option>
                                                    <option value="Wedding">Wedding</option>
                                                    <option value="Birthday">Birthday</option>
                                                    <option value="Babyshoot">Babyshoot</option>
                                                    <option value="Puberty">Puberty</option>
                                                    <option value="Babyshower">Babyshower</option>
                                                    <option value="Engagement">Engagement</option>
                                                </select> */}

                                                {/* <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, eventtype: e.target.value }))} placeholder="Event Type" /> */}
                                            {/* </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div><select class="form-select form-select-sm form-control" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, package: e.target.value }))}>
                                                    <option selected>Packages</option>
                                                    <option value="Basic">Basic</option>
                                                    <option value="Silver">Silver</option>
                                                    <option value="Gold">Gold</option>
                                                    <option value="Platinum">Platinum</option>
                                                </select>

                                            </div>
                                            <div className="p-2">
                                                <button className="btn btn-success" onClick={submit}>Submit</button>
                                            </div> */}
                                            {/* <h6>{JSON.stringify(uservalue)}</h6> */}
{/* 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className=" container ">

                            <div className="copyright" id="copyright"> */}
                                {/* &copy;
                <script>
                    document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                </script>, Designed by */}
                                {/* <a href="Portfolio" target="_blank">Portfolio</a>. Coded by
                                <a href="Agaram softwares" target="_blank">Agaram softwares</a>.
                            </div>
                        </div>
                    </footer> */}

{/* <form className="row g-3 needs-validation" >
  <div className=" col-3">
    <label for="validationCustom01" className="form-label m-2">Event Date</label>
    <input type="date" className="form-control bg-light m-2 p-3" onKeyUp={(e) => dispatch(booking({ ...bookvalue,event_date: e.target.value }))} placeholder="Data" /> */}

    {/* <input type="text" class="form-control" id="validationCustom01" value="Mark"/> */}
    {/* <div class="valid-feedback">
      Looks good!
    </div> */}
  {/* </div>
  <div className=" col-3">
    <label for="validationCustom02" className="form-label m-2">Event Time</label>
    <input type="time" className="form-control bg-light m-2 p-3" onKeyUp={(e) => dispatch(booking({ ...bookvalue, event_time: e.target.value }))} placeholder="Time" /> */}

    {/* <input type="text" class="form-control" id="validationCustom02" value="Otto"/> */}
    {/* <div class="valid-feedback">
      Looks good!
    </div> */}
  {/* </div>
  <div className="col-3">
    <label for="validationCustomUsername" className="form-label m-2">Location</label>
    <div className="input-group has-validation"> */}
      {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
      {/* <input type="text" className="form-control bg-light m-2 p-3" onKeyUp={(e) => dispatch(booking({ ...bookvalue, location: e.target.value }))} placeholder="Location" /> */}

      {/* <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"/> */}
      {/* <div class="invalid-feedback">
        Please choose a username.
      </div> */}
    {/* </div>
  </div>
  <div className="col-3">
    <label for="validationCustom03" className="form-label m-2">Venue</label>
    <input type="text" className="form-control bg-light m-2 p-3" onKeyUp={(e) => dispatch(booking({ ...bookvalue, venue: e.target.value }))} placeholder="Venue" /> */}

    {/* <input type="text" class="form-control" id="validationCustom03"/> */}
    {/* <div class="invalid-feedback">
      Please provide a valid city.
    </div> */}
  {/* </div>
  <div className=" col-3">
    <label for="validationCustom04" className="form-label m-2">Event Type</label>
    <select className="form-select form-select-sm form-control bg-light m-2 p-3" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, event_type: e.target.value }))}>
                                                    <option selected>Event Type</option>
                                                    <option value="Wedding">Wedding</option>
                                                    <option value="Birthday">Birthday</option>
                                                    <option value="Babyshoot">Babyshoot</option>
                                                    <option value="Puberty">Puberty</option>
                                                    <option value="Babyshower">Babyshower</option>
                                                    <option value="Engagement">Engagement</option>
                                                </select>
  </div>
  <div className="col-3">
    <label for="validationCustom05" className="form-label m-2">Packages</label>
    <select className="form-select form-select-sm form-control bg-light m-2 p-3" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, package: e.target.value }))}>
                                                    <option selected>Packages</option>
                                                    <option value="Basic">Basic</option>
                                                    <option value="Silver">Silver</option>
                                                    <option value="Gold">Gold</option>
                                                    <option value="Platinum">Platinum</option>
                                                </select> */}
    {/* <input type="text" class="form-control" id="validationCustom05" /> */}
    {/* <div class="invalid-feedback">
      Please provide a valid zip.
    </div> */}
  {/* </div> */}
  {/* <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div> */}
  {/* <div class="col-12">
  <button className="box btn-success" onClick={submit}>Submit</button> */}

    {/* <button class="btn btn-primary" type="submit">Submit form</button> */}
  {/* </div>
</form> */}

<div className="box">
      <div id="contactUsMap" class="map"></div>
      <div className="col-lg-6 col-md-10">
        <div className="card card-contact card-raised">
          <form role="form" id="contact-form" method="post">
            <div className="card-header text-center">
              <h4 className="card-title text-dark">Booking Details</h4>
            </div>
            <div className="card-body">
              <div className="row">
                    <div className="col-md-6 pr-2">
                    <label>Event Date</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                      <input type="date" className='form-control' onKeyUp={(e) => dispatch(booking({ ...bookvalue,event_date: e.target.value }))} placeholder="Date" />

                    </div>
                  </div>
                    </div>
                    <div className="col-md-6 pl-2">
                    <label>Event Time</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                      </div>
                      <input type="time" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue,event_time: e.target.value }))} placeholder="Date" />


                  </div>
                    </div>
                  
                
              </div>
              <div className="row">
                <div className="col-md-6 pr-2">
                  <label>Event Type</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"></span>
                    </div>
                    <select className="form-select form-select-sm form-control  bg-dark text-light" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, event_type: e.target.value }))}>
                                                    <option selected>Event Type</option>
                                                    <option value="Wedding">Wedding</option>
                                                    <option value="Birthday">Birthday</option>
                                                    <option value="Babyshoot">Babyshoot</option>
                                                    <option value="Puberty">Puberty</option>
                                                    <option value="Babyshower">Babyshower</option>
                                                    <option value="Engagement">Engagement</option>
                                                </select>
                  </div>
                </div>
                <div className="col-md-6 pl-2">
                  <label>Packages</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"></span>
                    </div>
                    <select className="form-select form-select-sm form-control bg-dark text-light" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, package: e.target.value }))}>
                                                    <option selected>Packages</option>
                                                    <option value="Basic">Basic</option>
                                                    <option value="Silver">Silver</option>
                                                    <option value="Gold">Gold</option>
                                                    <option value="Platinum">Platinum</option>
                                                </select> 
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                  <button type="submit" className="btn btn-success btn-round pull-right">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


                </div>
            </div>

        </div>
    )
}