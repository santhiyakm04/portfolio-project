import { Link } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const Studio_Details=()=>{
  let {id}=useParams();
  const [viewdata,setviewdata]=useState({})
  
  useEffect(()=>{
      axios.get(`http://agaram.academy/api/action.php?request=getMemberDetail&id=${id}`).then((res)=>{
          setviewdata(res.data.data)
          console.log(res.data.data)
      })
  },[id])
    return(
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
              <a className="navbar-brand" href="#pablo">{viewdata.name}</a>
            </div>
            <div className="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/studio/list">All Studios</Link>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                  {viewdata.city}
                  </a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#pablo">
                {viewdata.phone}
                    </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                  {viewdata.email}
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
            <div className="page-header-image" style={{backgroundImage: "url('/assets/img/bg30.jpg')"}}></div>
            <div className="content-center text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h1 className="title">{viewdata.name}</h1>
                  <h4 className="description text-white">{viewdata.address}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('/assets/img/bg29.jpg')"}}></div>
            <div className="content-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                  <h1 className="title">Street Style: Couture.</h1>
                  <h4 className="description text-white">See what Karlie Kloss, Tracee Ellis Ross and others wore between the shows...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('/assets/img/bg28.jpg')"}}></div>
            <div className="content-center text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h1 className="title">For Men With Style.</h1>
                  <h4 className="description text-white">Shirts that actually fit? Check. Linen shorts? Yup. Those wider pants suddenly in style? Got them, too....</h4>
                </div>
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
                     <h3>aby Pictures</h3>
                    </div>
                    <div className="tab-pane" id="couple">
                      <h3>Couple Pictures</h3>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
             <div className='text-center'>
            <Link to="/book_details" className='btn btn-primary '>Book Now</Link>
            </div>
            

                <div class="row no-gutters justify-content-center">
                        <div class="col-8">
                        <h3 class="title text-center">Packages</h3>
                            <div class="accordion" id="planscollapse">
                             
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-2" id="plan1">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail1" aria-expanded="true" aria-controls="plandetail1">
                                                   Basic<span class="colored-red">.</span>
                                                    <span class="pricepara float-right">
                                                        <del class="money">125000</del>&nbsp;<span class="money">100000</span>
                                                    </span>
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
                                                <p class="fw600 colored-red mb-1">Offer Price:</p>
                                                <p class="pricepara">
                                                    <del class="money">125000</del>&nbsp;<span class="money">100000</span>
                                                </p>
                                                <a class="btn btn-primary planlnk" href="/wedding/book?plan=PLN-82c6f695-95ed-48a6-b6a7-399d9e60e0bc">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-3" id="plan2">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail2" aria-expanded="true" aria-controls="plandetail2">
                                                   Silver <span class="colored-red">.</span>
                                                    <span class="pricepara float-right">
                                                        <del class="money">150000</del>&nbsp;<span class="money">100000</span>
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
                                                <p class="fw600 colored-red mb-1">Offer Price:</p>
                                                <p class="pricepara">
                                                    <del class="money">150000</del>&nbsp;<span class="money">100000</span>
                                                </p>
                                                <a class="btn btn-primary planlnk" href="/wedding/book?plan=PLN-c82f6dec-80a8-4526-97c3-1855f03f0efd">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-3" id="plan3">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail3" aria-expanded="true" aria-controls="plandetail3">
                                                    Gold<span class="colored-red">.</span>
                                                    <span class="pricepara float-right">
                                                        <del class="money">250000</del>&nbsp;<span class="money">200000</span>
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
                                                <p class="fw600 colored-red mb-1">Offer Price:</p>
                                                <p class="pricepara">
                                                    <del class="money">250000</del>&nbsp;<span class="money">200000</span>
                                                </p>
                                                <a class="btn btn-primary planlnk" href="/wedding/book?plan=PLN-c14906db-9260-4577-981a-ae5c91a55c15">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card pricingcard">
                                        <div class="card-header bg-white border-light p-3" id="plan4">
                                            <h5 class="card-title mb-0">
                                                <a class="btn-block text-left" role="button" data-toggle="collapse" data-target="#plandetail4" aria-expanded="true" aria-controls="plandetail4">
                                                    Platinum<span class="colored-red">.</span>
                                                    <span class="pricepara float-right">
                                                        <del class="money">350000</del>&nbsp;<span class="money">300000</span>
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
                                                <p class="fw600 colored-red mb-1">Offer Price:</p>
                                                <p class="pricepara">
                                                    <del class="money">350000</del>&nbsp;<span class="money">300000</span>
                                                </p>
                                                <a class="btn btn-primary planlnk" href="/wedding/book?plan=PLN-7b3a30c4-baf7-453a-93b0-0a2b3da1d523">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>


                    <div id="comments">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <div class="media-area">
                    <h3 class="title text-center">
                       Client Review
                    </h3>
                    <div class="media">
                      <a class="pull-left" href="#pablo">
                        <div class="avatar">
                          <img class="media-object img-raised" src="assets/img/marie.jpg" />
                        </div>
                      </a>
                      <div class="media-body">
                        <h5 class="media-heading">Tina Andrew
                          <small class="text-muted">&middot; 7 minutes ago</small>
                        </h5>
                        <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                        <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>
                        <div class="media-footer">
                          <a href="#pablo" class="btn btn-primary btn-neutral pull-right" rel="tooltip" title="Reply to Comment">
                            <i class="now-ui-icons ui-1_send"></i> Reply
                          </a>
                          <a href="#pablo" class="btn btn-danger btn-neutral pull-right">
                            <i class="now-ui-icons ui-2_favourite-28"></i> 243
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media media-post">
                  </div>
                 
                  <h3 class="text-center">Post your comment</h3>
                  <div class="media media-post">
                    <a class="pull-left author" href="#pablo">
                      <div class="avatar">
                        <img class="media-object img-raised" alt="64x64" src="assets/img/placeholder.jpg" />
                      </div>
                    </a>
                    <div class="media-body">
                      <form class="form">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Your Name" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="email" class="form-control" placeholder="Your email" />
                            </div>
                          </div>
                        </div>
                        <textarea class="form-control" placeholder="Write some nice stuff or nothing..." rows="6"></textarea>
                        <div class="media-footer">
                          <h6 class="text-muted">Sign in with</h6>
                          <a href="" class="btn btn-icon btn-round btn-twitter">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="" class="btn btn-icon btn-round btn-facebook">
                            <i class="fab fa-facebook-square"></i>
                          </a>
                          <a href="" class="btn btn-icon btn-round btn-google">
                            <i class="fab fa-google-plus-square"></i>
                          </a>
                          <a href="#pablo" class="btn btn-primary pull-right">Post Comment</a>
                        </div>
                      </form>
                    </div>
                </div>
                    </div>
                </div>
                </div>



                <div class="pricing-5 section-pricing-5 section-image" id="pricing-5" style={{backgroundImage: "url('assets/img/bg31.jpg')"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2 class="title">Choose a plan for your next project</h2>
              <ul class="nav nav-pills nav-pills-primary" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#basic" role="tablist">
                   Basic
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#silver" role="tablist">
                  silver
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#gold" role="tablist">
                    Gold
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#platinum" role="tablist">
                    Platinum
                  </a>
                </li></ul>
              <p class="description">You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if you're not happy with your purchase.</p>
            </div>
            <div class="col-md-7 ml-auto mr-auto">
              <div class="tab-content tab-space">
                <div class="tab-pane active" id="basic">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-pricing card-raised">
                        <div class="card-body">
                          <h5 class="category">Basic</h5>
                          <h1 class="card-title">
                            <small>$</small>100000</h1>
                          <ul>
                            <li>
                              <b>15</b> 3 Functions - 4 Member Team</li>
                            <li>
                              <b>5GB</b> Storage</li>
                            <li>
                              <b>Unlimited</b> users</li>
                            <li>
                              <b>No time</b> tracking</li>
                          </ul>
                          <a href="#pablo" class="btn btn-primary btn-round">
                            Buy Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="gold">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-pricing card-raised">
                        <div class="card-body">
                          <h5 class="category">Gold</h5>
                          <h1 class="card-title">
                            <small>$</small>30000</h1>
                          <ul>
                            <li>
                              <b>15</b> Projects</li>
                            <li>
                              <b>5GB</b> Storage</li>
                            <li>
                              <b>Unlimited</b> users</li>
                            <li>
                              <b>No time</b> tracking</li>
                          </ul>
                          <a href="#pablo" class="btn btn-primary btn-round">
                            Buy Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="tab-pane" id="platinum">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-pricing card-raised">
                        <div class="card-body">
                          <h5 class="category">Platinum</h5>
                          <h1 class="card-title">
                            <small>$</small>50000</h1>
                          <ul>
                            <li>
                              <b>15</b> Projects</li>
                            <li>
                              <b>5GB</b> Storage</li>
                            <li>
                              <b>Unlimited</b> users</li>
                            <li>
                              <b>No time</b> tracking</li>
                          </ul>
                          <a href="#pablo" class="btn btn-primary btn-round">
                            Buy Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="silver">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-pricing card-raised">
                        <div class="card-body">
                          <h5 class="category">Silver</h5>
                          <h1 class="card-title">
                            <small>$</small>20000</h1>
                          <ul>
                            <li>
                              <b>15</b> Projects</li>
                            <li>
                              <b>5GB</b> Storage</li>
                            <li>
                              <b>Unlimited</b> users</li>
                            <li>
                              <b>No time</b> tracking</li>
                          </ul>
                          <a href="#pablo" class="btn btn-primary btn-round">
                            Buy Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


                <footer class="footer footer-big" data-background-color="black">
            <div class="container">
              <div class="content">
                <div class="row">
                  <div class="col-md-2">
                    <h5>About Us</h5>
                    <ul class="links-vertical">
                      <li>
                        <a href="#pablo" class="text-muted">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Presentation
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-2">
                    <h5>Market</h5>
                    <ul class="links-vertical">
                      <li>
                        <a href="#pablo" class="text-muted">
                          Sales FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          How to Register
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Sell Goods
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Receive Payment
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Transactions Issues
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="text-muted">
                          Affiliates Program
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h5>Social Feed</h5>
                    <div class="social-feed">
                      <div class="feed-line">
                        <i class="fab fa-twitter"></i>
                        <p>How to handle ethical disagreements with your clients.</p>
                      </div>
                      <div class="feed-line">
                        <i class="fab fa-twitter"></i>
                        <p>The tangible benefits of designing at 1x pixel density.</p>
                      </div>
                      <div class="feed-line">
                        <i class="fab fa-facebook-square"></i>
                        <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h5>Follow Us</h5>
                    <ul class="social-buttons">
                      <li>
                        <a href="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-round">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-round">
                          <i class="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-round">
                          <i class="fab fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="btn btn-icon btn-neutral btn-google btn-round">
                          <i class="fab fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" class="btn btn-icon btn-neutral btn-instagram btn-round">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <h5>
                      <small>Numbers Don't Lie</small>
                    </h5>
                    <h5>14.521
                      <small class="text-muted">Freelancers</small>
                    </h5>
                    <h5>1.423.183
                      <small class="text-muted">Transactions</small>
                    </h5>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </footer>
            </div>
    )
}