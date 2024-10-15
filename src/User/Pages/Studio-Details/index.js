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
        <nav className="navbar navbar-expand-lg bg-warning lsting-navbar">
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
                  <Link className="nav-link" to="/user/studiolist">Home</Link>
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
                <li className="nav-item">
                  <a  className="nav-link">
                  <Link to="/" className='text-light'>Logout</Link>

                  </a>
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
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-trungnguyenphotog-5096300.jpg')" }}></div>
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
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-anas-ahmed-1606053043-27535714.jpg')" }}></div>
              <div className="content-center">
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-hatice-796619215-28191695.jpg')" }}></div>
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
            <ul className="nav nav-tabs nav-tabs-neutral justify-content-center bg-warning" role="tablist" data-background-color="orange">
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#tradition">Traditional</a>
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
       
        {/* {update.map((each)=> */}
        <div>
        {/* <div className='box' style={{ backgroundImage: "url('/assets/img/pexels-hatice-796619215-28191695.jpg')" }} > */}
        <div className="row no-gutters justify-content-center">
                        <div className="col-8">
                        <h3 className="title text-center text-dark">Packages</h3>
                            <div className="accordion" id="planscollapse">
                             
                                    <div className="card pricingcard">
                                        <div className="card-header bg-white border-light p-2" id="plan1">
                                            <h5 className="card-title mb-0">
                                                <a className="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail1" aria-expanded="true" aria-controls="plandetail1">
                                                   <h4 className='text-dark'>Basic</h4><span class="colored-red"></span>
                                                    {/* <span class="pricepara float-right">
                                                        <del class="money">125000</del>&nbsp;<span class="money">100000</span>
                                                    </span> */}
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail1" className="collapse show" aria-labelledby="plan1" data-parent="#planscollapse">
                                            <div className="card-body">
                                                <div  className="card-text"><b className='text-info'>Photography + Video + Drone</b>

<ul className='text-danger'>
	<b>3 Functions - 4 Member Team</b><br/>
	<b>1 Traditional + 1 Candid Photographer, 1 Traditional + 1 Cinematic Videographer</b><br/>
	<b>1 Minute Teaser, 4 Min Trailer. 1 Full-Length&nbsp;Traditional Video, 1000 Images</b><br/>
</ul>

<b className='text-info'>Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights</b>
</div><br/>
                                                <b className="fw600 colored-red mb-1 text-danger">Amount:</b>
                                                <p className="pricepara">
                                                  <b className='text-success'>10000</b>
                                                  {/* <b className="money">{each.name=="basic"?each.amount:""}</b> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card pricingcard">
                                        <div className="card-header bg-white border-light p-3" id="plan2">
                                            <h5 className="card-title mb-0">
                                                <a className="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail2" aria-expanded="true" aria-controls="plandetail2">
                                                   <h4 className='text-dark'>Silver</h4> <span className="colored-red"></span>
                                                    <span className="pricepara float-right">
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail2" className="collapse " aria-labelledby="plan2" data-parent="#planscollapse">
                                            <div class="card-body">
                                                <div  className="card-text"><b className='text-info'>One Day Wedding - Morning Rituals + Wedding + Reception&nbsp; for Upto 500 Pax</b>

<b className='text-info'>3 Phootographers + 3 Cinematographer&nbsp;</b>

<ul className='text-danger'>
	<b>50 Retouched edited Pictures.</b><br/>
	<b>We will provide you with 1 Cinematic video (2-4 minutes) (all functions combined).</b><br/>
	<b>Upto 30 minutes Video of three&nbsp;Functions.&nbsp;</b><br/>
	<b>All the edited photos will be shared in 20 - 25 working days post the wedding.</b><br/>
	<b>All the videos will be delivered within 9 -10 weeks.</b><br/>
</ul>

<b className='text-info'>Printed Album at Extra Charge starting at Rs 8000 for 30 pages.</b>
</div>
                                                <b className="fw600 colored-red mb-1 text danger">Amount</b>
                                                <p className="pricepara">
                                                  <b className='text-success'>25000</b>
                                                {/* <b className="money">{each.name=="silver"?each.amount:""}</b> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card pricingcard">
                                        <div className="card-header bg-white border-light p-3" id="plan3">
                                            <h5 className="card-title mb-0">
                                                <a className="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail3" aria-expanded="true" aria-controls="plandetail3">
                                                   <h4 className='text-dark'> Gold</h4><span className="colored-red"></span>
                                                    <span className="pricepara float-right">
                                      
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail3" className="collapse " aria-labelledby="plan3" data-parent="#planscollapse">
                                            <div className="card-body">
                                                <div className="card-text"><b className='text-info'>Photography + Video + Drone</b>

<ul className='text-danger'>
	<b>5 Functions - 5 Member team</b><br/>
	<b>1 Traditional + 2 Candid Photographer, 1 Traditional + 1 Cinematic Videographer</b><br/>
	<b>1 Minute Teaser, 4 Min Trailer. 1 Full-Length Traditional Video, 1000 Images</b><br/>
	<b>Senior Team</b><br/>
</ul>

<b className='text-info'>Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights</b>

<b className='text-info'>&nbsp;</b>
</div>
                                                <b className="fw600 colored-red mb-1 text-danger">Amount</b>
                                                <p className="pricepara">
                                                  <b className='text-success'>75000</b>
                                                   {/* <b class="money">{each.name=="gold"?each.amount:""}</b> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card pricingcard">
                                        <div className="card-header bg-white border-light p-3" id="plan4">
                                            <h5 className="card-title mb-0">
                                                <a className="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail4" aria-expanded="true" aria-controls="plandetail4">
                                                   <h4 className='text-dark'>Platinum</h4> <span className="colored-red"></span>
                                                    <span className="pricepara float-right">
                                          
                                                    </span>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="plandetail4" className="collapse " aria-labelledby="plan4" data-parent="#planscollapse">
                                            <div className="card-body">
                                                <div className="card-text"><b className='text-info'>Photography + Video + Drone</b>

<ul className='text-danger'>
	<b>7 Functions - 6 Member Team</b><br/>
	<b>1 Traditional + 2 Candid Photographer, 1 Traditional + 2 Cinematic Videographer</b><br/>
	<b>1 Minute Teaser, 4 Min Trailer. 1 Full-Length Traditional Video, 2000 Images</b><br/>
	<b>Boutique Wedding Team</b><br/>
	<b>Wedding Scripting and Mood Boarding</b><br/>
</ul>

<b className='text-info'>Full Frame High-end Cameras, Prime and Wide Lenses, Gimbal and Lights</b>
</div>
                                                <b className="fw600 colored-red mb-1 text-danger">Amount</b>
                                                <p className="pricepara">
                                                  <b className='text-success'>100000</b>
                                                   {/* <b class="money">{each.name=="platinum"?each.amount:""}</b> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
        
                    <div className='text-center'>
                     <button className="btn btn-danger" onClick={()=>{navigate(`/user/bookdetails?user_id=${logvalue.id}&studio_id=${id}`)}}>Book Now</button>
                     </div>
                    </div>
                    {/* </div> */}
                  {/* )} */}
    
      {/* <h2 className="text-center">Client Review</h2>
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
      </div> */}
      {/* <footer className="footer footer-big" data-background-color="black">
        <div className="container">
          <div className="content">
              <div>
                <h2 className='text-center'>About Us</h2>
                <h3 className="title text-center">{viewdata.about_us}</h3>

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
              
      </footer> */}

<section id="stats" className="stats section dark-background">

<img src="../../../assets/img/pexels-fwstudio-33348-129731.jpg" alt="" data-aos="fade-in" />

<div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
  <div  className='row about-section-detail justify-content-center '>
      <h3>About Us</h3>
      <h5>{viewdata.about_us}</h5>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
</svg>
  </div>
      <p>{viewdata.name_of_founder}</p>
      <p>Photographer</p>
  </div>

  <div className="row">

    <div className="col-lg-3 col-md-6">
      <div className="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">{viewdata.no_of_achievements}</span>
        <p>Achivements</p>
      </div>
    </div>
    

    <div className="col-lg-3 col-md-6">
      <div className="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">{viewdata.no_of_branches}</span>
        <p>Branches</p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">{viewdata.no_of_employees}</span>
        <p>Employees</p>
      </div>
    </div>

  </div>

</div>

</section>
    </div >
    // )}
    // </div>
  )
}