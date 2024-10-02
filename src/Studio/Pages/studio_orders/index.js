import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studio } from '../../Slices/profileslice'


export const Studio_Order = () => {


    const det = useSelector((state) => state.details).studioProfile;
      console.log(det)
    const dispatch = useDispatch();
    const [packages, setPackages] = useState([{
        name:"",
        amount:""
    }
        ])
    console.log(packages)
    // --------------------------------------------------------------------------

    const navigate = useNavigate()

    const [order, setorder] = useState([])

    const [ordername, setordername] = useState([])
    // ----------------------------------------------------------------------------
    const logup = useSelector((state) => state.logs).studiolog;



    const userdetail = () => {
        dispatch(studio({...det,packages:[{...packages,}]}))
        let formData = new FormData()
        formData.append("name_of_founder", det.name_of_founder)
        formData.append("no_of_branches", det.no_of_branches)
        formData.append("no_of_achievements", det.no_of_achievements)
        formData.append("about_us", det.about_us)
        formData.append("packages",JSON.stringify( det.packages))
        formData.append("studio_id", logup.data.id)

        axios.post("https://agaram.academy/api/action.php?request=studio_update_profile", formData).then((e) => {
            console.log(e)
            // alert("upload profile sucessfully")
        })
    }
    // -----------------------------------------------------------------------


    // ----------------------------------------------------------------------------


    const Viewpage = (idvalue) => {
        navigate(`/clientdetails/${idvalue}`)
    }

    const orderlist = () => {
        axios.get("https://agaram.academy/api/action.php?request=studio_getBookingDetails").then((e) => {
            setorder(e.data.data)
        })
    }
    useEffect(() => {
        orderlist()
    }, [])

    // ------------------------------------------------------------------------------


    const order_name = () => {
        axios.get("https://agaram.academy/api/action.php?request=studio_getAllUser").then((e) => {
            setordername(e.data.data)
        })
    }
    useEffect(() => {
        order_name()
    }, [])

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

                                    <Link to={"/Studio_login"} className="back"><i> </i> logout</Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">

                                    <Link to={"/Studio_login"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
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
                {/* <!-- Tab panes --> */}
                <div className="tab-content gallery">
                    <div className="tab-pane active" id="profile" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/bg23.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Chair remake.</h2>
                                        <p className="card-description text-white">
                                            Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way. It was a great project and I would be more than happy to do it again.
                                        </p>
                                        <label className="badge badge-neutral">Trello</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-warning">
                                        <i className="now-ui-icons users_single-02"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Work With Any Team</h5>
                                        <p className="description">
                                            Whether it’s for work or even the next family vacation, Trello helps your team.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-warning">
                                        <i className="now-ui-icons business_chart-bar-32"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">A Productivity Platform</h5>
                                        <p className="description">
                                            Integrate the apps your team already uses directly into your workflow.
                                        </p>
                                    </div>
                                </div> */}
                            {/* </div> */}

                            {/* <div> */}
                            <form role="form" className="forms" id="contact-form" method="post">
                                {/* <small>
                                    {JSON.stringify(det)}
                                </small> */}

                                <label>Name of founder:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter ur name" onKeyUp={(e) => dispatch(studio({ ...det, name_of_founder: e.target.value }))} autocomplete="name" />
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
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages([...packages,{name:"basic",amount:e.target.value}])} aria-label="amount" autocomplete="amount" />
                                </div>

                                <label>Amount for silver  package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages([...packages,{name:"silver",amount:e.target.value}])} aria-label="amount" autocomplete="amount" />
                                </div>

                                <label>Amount for gold package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    {/* <input type="number" className="form-control" placeholder="enter ur package amount"onChange={(e) => setPackages([...packages,{name:"gold",amount:e.target.value}])} aria-label="amount" autocomplete="amount" /> */}
                                </div>

                                <label>Amount for platinum package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    {/* <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) =>setPackages([...packages,{name:"platinum",amount:e.target.value}])}aria-label="amount" autocomplete="amount" /> */}
                                </div>

                                <label>About us:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="about us" onKeyUp={(e) => dispatch(studio({ ...det, about_us: e.target.value }))} aria-label="amount" autocomplete="amount" />
                                </div>


                                {/* <div className="form-group">
                  <label>About us:</label>
                  <textarea name="about us" className="form-control" id="message" rows="6"></textarea>
                </div> */}



                                <div className="submit text-center">
                                    <button type='button' className="btn btn-primary btn-round btn-lg" onClick={userdetail}>upload</button>
                                </div>
                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="tab-pane" id="home" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/project8.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Social Analytics</h2>
                                        <p className="card-description">
                                            Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.
                                        </p>
                                        <label className="badge badge-neutral">Analytics</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-danger">
                                        <i className="now-ui-icons ui-2_chat-round"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Listen to Social Conversations</h5>
                                        <p className="description">
                                            Gain access to the demographics, psychographics, and location of unique people who talk about your brand.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-danger">
                                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Social Conversions</h5>
                                        <p className="description">
                                            Track actions taken on your website that originated from social, and understand the impact on your bottom line.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                            <table className="  table-light clientlist" >
                                <thead className="table table-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Events</th>
                                        <th>Date</th>
                                        <th>Place</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody  >
                                    {order.map((each) =>

                                        <tr className="table my-3">
                                            {ordername.map((n) =>
                                                <tr>
                                                    <td>{n.name}</td>

                                                </tr>
                                            )}
                                            <td>{each.event_type}</td>
                                            <td>{each.date}</td>
                                            <td>{each.location}</td>
                                            <td><button type='button' onClick={() => Viewpage(each.id)}>view</button></td>


                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="tab-pane" id="messages" role="tabpanel">
                        <div className="row">
                            {/* <div className="col-md-5 ml-auto mr-auto">
                                <div className="card card-background card-background-product card-raised" style={{ backgroundImage: "url('../assets/img/bg25.jpg')" }}>
                                    <div className="card-body">
                                        <h2 className="card-title">Interior Redesign</h2>
                                        <p className="card-description">
                                            Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.
                                        </p>
                                        <label className="badge badge-neutral">Interior</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info info-horizontal">
                                    <div className="icon icon-info">
                                        <i className="now-ui-icons design_palette"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Colors adjustments</h5>
                                        <p className="description">
                                            Gain access to the demographics, psychographics, and location of unique people who talk about your brand.
                                        </p>
                                    </div>
                                </div>
                                <div className="info info-horizontal">
                                    <div className="icon icon-info">
                                        <i className="now-ui-icons design_scissors"></i>
                                    </div>
                                    <div className="description">
                                        <h5 className="info-title">Performance Clothing</h5>
                                        <p className="description">
                                            Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
