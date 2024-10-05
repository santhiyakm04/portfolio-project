import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';


export const Studio_Details = () => {
  let {id} = useParams()
  // console.log(id)
  const navigate=useNavigate()
  const [viewdata, setviewdata] = useState({})
  console.log(viewdata.name_of_founder)
  const [review, setreview] = useState([])
  const [comment, setcomment] = useState({
    name: "",
    email: "",
    comment: ""
  })
  const details=useSelector((state)=>state.login)
  const logvalue=details.logData
  console.log(logvalue)
  // const registervalue = useSelector((state) => state.register)
  // const uservalue = registervalue.user_details
  // console.log(uservalue)


  const [update, setupdate] = useState([])
  console.log(update)

  const postcomment = () => {
    setreview([...review, comment])
  }
  useEffect(() => {
    axios.get(`https://agaram.academy/api/action.php?request=studio_getViewDetails&id=${id}`).then((res) => {
      setviewdata(res.data.data)
      setupdate(JSON.parse(res.data.data.packages))
     
      console.log(res.data.data)
    })
  }, [id])

  // useEffect(() => {
  //   axios.get(`https://agaram.academy/api/action.php?request=studio_getStudioProfile&studio_id=${id}`).then((value) => {
  //     setupdate(JSON.parse(value.data.data.packages))
  //     console.log(value.data.data)
  //   })
  // }, [])
  return (
    <div>
      <div className="header-3">
        <nav className="navbar navbar-expand-lg bg-primary lsting-navbar">
          <div className="container">
            <div className="navbar-translate">
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
              <a className="navbar-brand">{viewdata.name}</a>
            </div>
            <div className="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/studio/list">All Studios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/viewdetails">My Orders</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    {viewdata.phone}
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link">
                    {viewdata.email}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                    <i className="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/" className='text-dark m-5'>Logout</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>

        </div>

      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/bg30.jpg')" }}></div>
              <div className="content-center text-center">
                <div className="row">
                  <div className="col-md-8 ">
                    <h1 className="title">{viewdata.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/bg29.jpg')" }}></div>
              <div className="content-center">
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/bg28.jpg')" }}></div>
              <div className="content-center text-center">
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </div>

      <div className="col-md-10 ml-auto col-xl-12 mr-auto m-5">

        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tradition">Traditional</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#candid">Candid</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#outdoor">Outdoor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#shower">Baby shower</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#baby">Baby photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#couple">Couple photos</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content text-center">
              <div className="tab-pane active" id="tradition" >
                <h3>Traditional Pictures</h3>
              </div>
              <div className="tab-pane" id="candid">
                <h3>Candid Pictures</h3>
              </div>
              <div className="tab-pane" id="outdoor">
                <h3>Outdoor Pictures</h3>
              </div>
              <div className="tab-pane" id="shower">
                <h3>Baby Shower Pictures</h3>
              </div>
              <div className="tab-pane" id="baby">
                <h3>Baby Pictures</h3>
              </div>
              <div className="tab-pane" id="couple">
                <h3>Couple Pictures</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <div className='text-center'> */}
        {/* <Link to="/book_details" className='btn btn-primary'>Book Now</Link></div><br/> */}
       
        {update.map((each)=>
        <div>
        <div class="row no-gutters justify-content-center">
                        <div class="col-8">
                        <h3 class="title text-center">Packages</h3>
                            <div class="accordion" id="planscollapse">
                             
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-2" id="plan1">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail1" aria-expanded="true" aria-controls="plandetail1">
                                                   Basic<span class="colored-red"></span>
                                                    {/* <span class="pricepara float-right">
                                                        <del class="money">125000</del>&nbsp;<span class="money">100000</span>
                                                    </span> */}
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail1" class="collapse show" aria-labelledby="plan1" data-parent="#planscollapse">
                                            <div class="card-body">
                                                <div  class="card-text"><p>Photography + Video + Drone</p>

<ul>
	<li>3 Functions - 4 Member Team</li>
	<li>1 Traditional + 1 Candid Photographer, 1 Traditional + 1 Cinematic Videographer</li>
	<li>1 Minute Teaser, 4 Min Trailer. 1 Full-Length&nbsp;Traditional Video, 1000 Images</li>
</ul>

<p>Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights</p>
</div>
                                                <h4 className="fw600 colored-red mb-1">Amount:</h4>
                                                <p className="pricepara">
                                                  <b className="money">{each.name=="basic"?each.amount:""}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card pricingcard">
                                        <div className="card-header bg-white border-light p-3" id="plan2">
                                            <h5 className="card-title mb-0">
                                                <a className="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail2" aria-expanded="true" aria-controls="plandetail2">
                                                   Silver <span className="colored-red"></span>
                                                    <span className="pricepara float-right">
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail2" class="collapse " aria-labelledby="plan2" data-parent="#planscollapse">
                                            <div class="card-body">
                                                <div  class="card-text"><p>One Day Wedding - Morning Rituals + Wedding + Reception&nbsp; for Upto 500 Pax</p>

<p>3 Phootographers + 3 Cinematographer&nbsp;</p>

<ul>
	<li>50 Retouched edited Pictures.</li>
	<li>We will provide you with 1 Cinematic video (2-4 minutes) (all functions combined).</li>
	<li>Upto 30 minutes Video of three&nbsp;Functions.&nbsp;</li>
	<li>All the edited photos will be shared in 20 - 25 working days post the wedding.</li>
	<li>All the videos will be delivered within 9 -10 weeks.</li>
</ul>

<p>Printed Album at Extra Charge starting at Rs 8000 for 30 pages.</p>
</div>
                                                <h4 className="fw600 colored-red mb-1">Amount</h4>
                                                <p className="pricepara">
                                                <b className="money">{each.name=="silver"?each.amount:""}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-3" id="plan3">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail3" aria-expanded="true" aria-controls="plandetail3">
                                                    Gold<span class="colored-red"></span>
                                                    <span class="pricepara float-right">
                                      
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail3" class="collapse " aria-labelledby="plan3" data-parent="#planscollapse">
                                            <div class="card-body">
                                                <div class="card-text"><p>Photography + Video + Drone</p>

<ul>
	<li>5 Functions - 5 Member team</li>
	<li>1 Traditional + 2 Candid Photographer, 1 Traditional + 1 Cinematic Videographer</li>
	<li>1 Minute Teaser, 4 Min Trailer. 1 Full-Length Traditional Video, 1000 Images</li>
	<li>Senior Team</li>
</ul>

<p>Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights</p>

<p>&nbsp;</p>
</div>
                                                <h4 class="fw600 colored-red mb-1">Amount</h4>
                                                <p class="pricepara">
                                                   <b class="money">{each.name=="gold"?each.amount:""}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-3" id="plan4">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail4" aria-expanded="true" aria-controls="plandetail4">
                                                    Platinum<span class="colored-red"></span>
                                                    <span class="pricepara float-right">
                                          
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail4" class="collapse " aria-labelledby="plan4" data-parent="#planscollapse">
                                            <div class="card-body">
                                                <div class="card-text"><p>Photography + Video + Drone</p>

<ul>
	<li>7 Functions - 6 Member Team</li>
	<li>1 Traditional + 2 Candid Photographer, 1 Traditional + 2 Cinematic Videographer</li>
	<li>1 Minute Teaser, 4 Min Trailer. 1 Full-Length Traditional Video, 2000 Images</li>
	<li>Boutique Wedding Team</li>
	<li>Wedding Scripting and Mood Boarding</li>
</ul>

<p>Full Frame High-end Cameras, Prime and Wide Lenses, Gimbal and Lights</p>
</div>
                                                <h4 class="fw600 colored-red mb-1">Amount</h4>
                                                <p class="pricepara">
                                                   <b class="money">{each.name=="platinum"?each.amount:""}</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
        
                    <div className='text-center'>
                     <button className="btn btn-primary" onClick={()=>{navigate(`/user/bookdetails?user_id=${logvalue.id}&studio_id=${id}`)}}>Book Now</button>
                     </div>
                    </div>
                  )}
    
      <h2 className="text-center">Client Review</h2>
      {review.map((e) =>
        <div>
          <div id="comments">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="media-area">
                  <div className="media">
                      <div className="avatar">
                        <img className="media-object img-raised" src="../assets/img/logo.png"/>
                      </div>
                
                    <div className="media-body">
                      <h3 className="media-heading">{e.name}</h3>
                      <i>{e.comment}</i>
                      <div className="media media-post">
                        <a className="pull-left author" href="#pablo">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div >
          </div >
        </div>
      )}
      <div id="comments">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="media-area border border-dark m-3 p-3">
              <h3 className='text-center'>Post Comment</h3>
              <div className="media-body">
                <div className="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control p-3 text-dark border border-dark" placeholder="Your Name" onKeyUp={(e) => setcomment({ ...comment, name: e.target.value })} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control p-3 text-dark border border-dark" placeholder="Your email" onKeyUp={(e) => setcomment({ ...comment, email: e.target.value })} />
                      </div>
                    </div>
                  </div>
                  <textarea className="form-control p-3 text-dark border border-dark" placeholder="Write Something..." onKeyUp={(e) => setcomment({ ...comment, comment: e.target.value })}></textarea>
                  <div className="media-footer">
                    <h6 className="text-muted p-2">Sign in with</h6>
                    <a href="" className="btn btn-icon btn-round btn-twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="btn btn-icon btn-round btn-facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="" className="btn btn-icon btn-round btn-google">
                      <i className="fab fa-google-plus-square"></i>
                    </a>
                    <button className="btn btn-primary" onClick={postcomment}>post comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-big" data-background-color="black">
        <div className="container">
          <div className="content">
              <div>
                <h5 className='text-center'>About Us</h5>
              </div>
              <div className="container">
        <div className="photo-container">
          <img src="../assets/img/ryan.jpg" alt=""/>
        </div>
        <div className="text-center">
        <h3 className="title">{viewdata.name_of_founder}</h3>
        <p className="category">Photographer</p>
        </div>
        <div className="content">
             
          <div className="social-description">
            <h2 className="text-light">{viewdata.no_of_achievements}</h2>
            <p>Achivements</p>
          </div>
          <div>
            <h2 className="text-light">{viewdata.no_of_branches}</h2>
            <p>Branches</p>
          </div>
          <div className="social-description">
            <h2 className="text-light">{viewdata.no_of_employees}</h2>
            <p>Employees</p>
          </div>
        </div>
      </div>
              </div>
              </div>
              
      </footer>
    </div >
    // )}
    // </div>
  )
}