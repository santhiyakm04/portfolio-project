import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studio } from '../../Slices/profileslice'
import { pack } from '../../Slices/profileslice'

export const Studio_Order = () => {


    const det = useSelector((state) => state.details).studioProfile;
    //   console.log(det)
    const dispatch = useDispatch();
    const [packages, setPackages] = useState({ name: "", amount: "" })

    // console.log(det)
    // --------------------------------------------------------------------------

    // const navigate = useNavigate()

    const [order, setorder] = useState([])
    const[search,setsearch]=useState([order])
    const[searchbar,setsearchbar]=useState({date:""})


    // const [ordername, setordername] = useState([])
    // ----------------------------------------------------------------------------
    const logup = useSelector((state) => state.logs).studiolog;

    const addlist = () => {
        dispatch(pack([...det.packages, packages]))

    }

    const userdetail = () => {
        // dispatch(pack([...det.packages, packages]))

        let formData = new FormData()
        formData.append("name_of_founder", det.name_of_founder)
        formData.append("no_of_branches", det.no_of_branches)
        formData.append("no_of_achievements", det.no_of_achievements)
        formData.append("about_us", det.about_us)
        formData.append("packages", JSON.stringify(det.packages))
        formData.append("studio_id", logup.data.id)

        axios.post("https://agaram.academy/api/action.php?request=studio_update_profile", formData).then((e) => {
            // console.log(e)
            alert("upload profile sucessfully")
        })
    }

    // -----------------------------------------------------------------------


    // ----------------------------------------------------------------------------


    // const Viewpage = (idvalue) => {
    //     navigate(`/clientdetails/${idvalue}`)
    // }

    const orderlist = () => {
        axios.get(`https://agaram.academy/api/action.php?request=studio_getBookingDetails&studio_id=${logup.data.id}`).then((n) => {
            setorder(n.data.data)
            
        })
    }
    useEffect(() => {
        orderlist()
    },[])


    const searchs =()=>{
        let bar = order.filter((v)=>{                     
             return  v.event_date==searchbar.event_date
        }
    )
        setsearch(bar)
    }

    // ------------------------------------------------------------------------------


    // const order_name = () => {
    //     axios.get("https://agaram.academy/api/action.php?request=studio_getAllUser").then((e) => {
    //         setordername(e.data.data)
    //         console.log(e)
    //     })
    // }
    // useEffect(() => {
    //     order_name()
    // }, [])

    // ---------------------------------------------------------------------------



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-transparent">
                <div className="container card1">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="#pablo">portfolio</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="example-navbar-transparent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">

                                    <Link to={"/Studio/login"} className="back"><i> </i> logout</Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">

                                    <Link to={"/Studio/login"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg></i> Go back</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ------------ */}
            <div className="col-md-12">

                <div className="nav-align-center">
                    <ul className="nav nav-pills nav-pills-primary " role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#profile" role="tablist">
                                {/* <i className="now-ui-icons design_image"></i> */}
                                <b>update profile</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#home" role="tablist">
                                {/* <i className="now-ui-icons location_world"></i> */}
                                <b>orders</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#messages" role="tablist">
                                {/* <i className="now-ui-icons design-2_ruler-pencil"></i> */}
                                <b>upload files </b>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* -------------------------------------- */}

                

                {/* <!-- Tab panes --> */}
                <div className="tab-content gallery">
                    <div className="tab-pane active" id="profile" role="tabpanel">
                        <div className="row">

                            <form role="form" className="forms" id="contact-form" method="post">
                                {/* <small>
                                    {JSON.stringify(det)}
                                </small> */}

                                <label>Name of founder:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter ur name"     onKeyUp={(e) => dispatch(studio({ ...det, name_of_founder: e.target.value }))} autocomplete="name" />
                                </div>

                                <label>No of branches:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of branches" onKeyUp={(e) => dispatch(studio({ ...det, no_of_branches: e.target.value }))} aria-label="branches" autocomplete="branches" />
                                </div>

                                <label>No of achievements:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of achievements" onKeyUp={(e) => dispatch(studio({ ...det, no_of_achievements: e.target.value }))} aria-label="achievements" autocomplete="achievements" />
                                </div>

                                <label>No of employees:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of employees" onKeyUp={(e) => dispatch(studio({ ...det, no_of_employees: e.target.value }))} aria-label="employees" autocomplete="employees" />
                                </div>

                                <label>Amount for basic  package:</label>
                               
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount"  onChange={(e) => setPackages({ name: "basic", amount: e.target.value })} aria-label="amount" autocomplete="amount" />
                                </div>
                                <button  className="btn btn-primary btn-round btn-sm addbtn" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label>Amount for silver  package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "silver", amount: e.target.value })} aria-label="amount" autocomplete="amount" />
                                </div>
                                <button  className="btn btn-primary btn-round btn-sm addbtn" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label>Amount for gold package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "gold", amount: e.target.value })} aria-label="amount" autocomplete="amount" />
                                </div>
                                <button  className="btn btn-primary btn-round btn-sm addbtn" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label>Amount for platinum package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "platinum", amount: e.target.value })} aria-label="amount" autocomplete="amount" />

                                </div>
                                <button  className="btn btn-primary btn-round btn-sm addbtn" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <label>About us:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="about us" onKeyUp={(e) => dispatch(studio({ ...det, about_us: e.target.value }))} aria-label="amount" autocomplete="amount" />
                                </div>

                                <div className="submit text-center">
                                    <button type='button' className="btn btn-primary btn-round btn-lg" onClick={() => userdetail()}>upload</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    {/* ------------------------------------------------------------- */}

                    <div className="tab-pane" id="home" role="tabpanel">
                        <div className="row">


                        <div class="card  card-form-horizontal cardb">
                    <div class="card-body">
                      <form method="" action="">
                        <div class="row">
                          <div class="col-sm-4 searchbar">
                            <div class="   input-group ">
                              <div class="input-group-prepend">
                                <span class="input-group-text"><i class="now-ui-icons ui-1_zoom-bold"></i></span>
                              </div>
                              <input type="text" class="form-control "  onKeyUp={(s)=>setsearchbar({...searchbar,date:s.target.value})} placeholder="search here..."/>
                            </div>
                          </div>
                          <div class="col-sm-2 ">
                            <button type="button" class="btn btn-primary btn-round btn-block bts"  onClick={()=>searchs(searchbar)}>search</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>


                            <table className="  table-light clientlist" >
                                <thead className="table table-dark">
                                    <tr>
                                        {/* <th>Name</th> */}
                                        
                                        <th>Date</th>
                                        <th>package</th>
                                        <th>Event</th>
                                        <th>time</th>
                                        <th>Place</th>
                                        <th>location</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody  >
                                    {search.map((each) =>

                                        <tr className="table my-3">
                                            {/* {ordername.map((n) =>
                                                <tr>
                                                    <td>{n.name}</td>

                                                </tr>
                                            )} */}
                                            <td>{each.event_date}</td>
                                            <td>{each.package}</td>
                                            <td>{each.event_type}</td>
                                            <td>{each.event_time}</td>
                                            <td>{each.venue}</td>
                                            <td>{each.location}</td>

                                            
                                            
                                            {/* <td><button type='button' onClick={() => Viewpage(each.id)}>view</button></td> */}


                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
