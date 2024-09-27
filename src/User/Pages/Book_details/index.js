
import { booking } from "../../Slices/new"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"




export const Book_Details = () => {
    const navigate = useNavigate()
    const bookdetail = useSelector((state) => state.book)
    const bookvalue = bookdetail.book_details
    // console.log()
    const dispatch = useDispatch()


    const submit = () => {
        alert("Booked successfully")
        navigate("/view_details")
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
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, name: e.target.value }))} placeholder="Name" />
                                            </div>
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons ui-1_email-85"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, email: e.target.value }))} placeholder="Email" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, phone: e.target.value }))} placeholder="Phone Number" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, address: e.target.value }))} placeholder="Address" />
                                            </div>
                                            <h3 className="text-dark">Event Details</h3>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, bridenamegroomname: e.target.value }))} placeholder="Bride/Groom Name" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="date" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, date: e.target.value }))} placeholder="Data" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="time" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, time: e.target.value }))} placeholder="Time" />
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
                                                </div><select class="form-select form-select-sm form-control" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, eventtype: e.target.value }))}>
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
                                                </div><select class="form-select form-select-sm form-control" aria-label="Small select example"  onClick={(e) => dispatch(booking({ ...bookvalue, packages: e.target.value }))}>
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