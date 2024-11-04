
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


    const submit = () => {

        const formData=new FormData();
       
        formData.append("event_date",bookvalue.event_date)
        formData.append("event_time",bookvalue.event_time)
        formData.append("location",bookvalue.location)
        formData.append("venue",bookvalue.venue)
        formData.append("event_type",bookvalue.event_type)
        formData.append("packages",bookvalue.packages)
        formData.append("user_id",bookvalue.user_id)
        formData.append("studio_id",bookvalue.studio_id)
        
        // axios.post("https://agaram.academy/api/action.php?request=studio_create_booking",formData).then((res)=>{
            axios.post("https://subhashs.pythonanywhere.com/details",formData).then((res)=>{

            console.log(res.data.data)
        })
        // alert("Booked successfully")
        // navigate("/view_details")
    }
   

    return (
        <div>
                    <div className="page-header header-filter" filter-color="black">
                    <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/bg18.jpg)" }}></div>
                    <div class="signup-page sidebar-collapse">
            <nav class="navbar navbar-expand-lg bg-primary p-0">
                <div class="container">
                  <h4 className="text-light">PORTFOLIO</h4>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="example-navbar-icons">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i class="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/user_login" className='text-dark m-5'>Logout</Link>
                        </div>
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
                                                </select>

                                                {/* <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, eventtype: e.target.value }))} placeholder="Event Type" /> */}
                                            </div>
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
                                            </div>
                                            {/* <h6>{JSON.stringify(uservalue)}</h6> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className=" container ">

                            <div className="copyright" id="copyright">
                                {/* &copy;
                <script>
                    document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                </script>, Designed by */}
                                <a href="Portfolio" target="_blank">Portfolio</a>. Coded by
                                <a href="Agaram softwares" target="_blank">Agaram softwares</a>.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </div>
    )
}