import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import './index.css'
import { Link } from "react-router-dom"


export const Viewdetails=()=>{
    const[details,setdetails]=useState({})
    const{id}=useParams()
    useEffect(()=>{
        axios.get(`http://agaram.academy/api/action.php?request=getMemberDetail&id=${id}`).then((e) => {
                setdetails (e.data.data)
        })},
         [] )

return(
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
                       
                        <Link to ={"/Studio_Orders"}  className="back"> <i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
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
              <h3  className="card-title">
              <b><u>client details</u></b></h3>
              <ul>
                <li><i className=""></i><b>Name: {details.name}</b></li>
                <li><i className=""></i><b>Email:{details.email}</b> </li>
                <li><i className=""></i><b>phone:{details.phone}</b></li>
                <li><i className=""></i><b>City:{details.city}</b></li>
                <li><i className=""></i><b>Area:{details.area}</b></li>
                {/* <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> 5 Databases</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> No Support</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> 3 email</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> 5 Databases</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> No Support</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> 3 email</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> 5 Databases</li>
                <li><i className="now-ui-icons ui-1_simple-remove text-danger"></i> No Support</li> */}
              </ul>
              <a href="#pablo" className="btn btn-primary btn-round">
                update status
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </>   
)
}
