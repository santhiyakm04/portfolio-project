import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import './index.css'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { studio_update } from "../../Slices/Updateslice"



export const Viewdetails = () => {
  const [details, setdetails] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://agaram.academy/api/action.php?request=studio_getBookingDetails&id=${id}`).then((e) => {
      setdetails(e.data.data)
    })
  },
    [])

  // ---------------------------------------------------------------

  const update = useSelector((state) => state.details).studioProfile;

  const dispatch = useDispatch();

  const updatestatus = () => {
    let formData = new FormData()
    formData.append("update_status", update.update_status)


    axios.post("https://agaram.academy/api/action.php?request=studio_confirm_details", formData).then((e) => {
      console.log(e)

    })
  }






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

                  <Link to={"/Studio_Orders"} className="back"> <i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg></i> Go back</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ----------------------- */}
      <div className="cards">
        <div className="container cardw">
          <div className="title">

          </div>
          <div className="row">

            <div className="col-md-10  col-lg-6">
              <div className="card card-pricing">
                <div className="card-body cardlit">
                  {/* <h6 className="category">Starter</h6> */}
                  <h3 className="card-title">
                    <b><u>client details</u></b></h3>
                  <ul>
                    <li><i className=""></i><b>Name: {details.name}</b></li>
                    <li><i className=""></i><b>Email:{details.email}</b> </li>
                    <li><i className=""></i><b>phone:{details.phone}</b></li>
                    <li><i className=""></i><b>address:{details.address}</b></li>
                    <li><i className=""></i><b>bride/groom name:{details.bridenamegroomname}</b></li>
                    <li><i className=""></i><b>date:{details.date}</b></li>
                    <li><i className=""></i><b>time:{details.time}</b></li>
                    <li><i className=""></i><b>location:{details.location}</b></li>
                    <li><i className=""></i><b>venue:{details.venue}</b></li>
                    <li><i className=""></i><b>event type:{details.eventtype}</b></li>
                    <li><i className=""></i><b>packages:{details.packages}</b></li>
                    <li>
                      <div class="col-md-8 mt-3 mx-auto pl-2">
                        <label><b>Status:</b></label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class=""></i></span>
                          </div>
                          <input type="text" className="form-control" placeholder="Status Here..." onKeyUp={(e) => dispatch(studio_update({ ...update, update_status: e.target.value }))} />
                        </div>
                      </div>
                    </li>
                  </ul>


                  <div className="submit text-center">
                    <button className="btn btn-primary btn-round btn-lg" onClick={updatestatus}>updatestatus</button>
                  </div>

                  {/* <button href="#pablo" className="btn btn-primary btn-round">
                update status
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
