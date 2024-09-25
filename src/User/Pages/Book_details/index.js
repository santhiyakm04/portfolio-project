
import { booking } from "../../Slices/new"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"




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

            <div class="signup-page sidebar-collapse">

                <nav className="navbar navbar-expand-lg bg-white navbar-absolute navbar-transparent">
                    <div className="container">
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit-pro/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                                Portfolio
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar top-bar"></span>
                                <span className="navbar-toggler-bar middle-bar"></span>
                                <span className="navbar-toggler-bar bottom-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">

                        </div>
                    </div>
                </nav>

                {/* <!-- End Navbar --> */}

                <div className="page-header header-filter" filter-color="black">
                    <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/bg18.jpg)" }}></div>
                    <div className="content">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-4 mx-auto">
                                    <div className="card card-signup">
                                        <div className="card-body  cardsize" >
                                            <h3 className="text-dark">Booking Details</h3>
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
                                            <h3 className="text-dark">Event Details</h3>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, bridename: e.target.value }))} placeholder="Bride Name" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" onKeyUp={(e) => dispatch(booking({ ...bookvalue, groomname: e.target.value }))} placeholder="Groom Name" />
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
                                                    <option value="Wedding">Basic</option>
                                                    <option value="Birthday">Silver</option>
                                                    <option value="Babyshoot">Gold</option>
                                                    <option value="Puberty">Platinum</option>
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