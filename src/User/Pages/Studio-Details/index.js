import { Link } from 'react-router-dom'
import './index.css'

export const Studio_Details=()=>{
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
              <a className="navbar-brand" href="#pablo">Portfolio</a>
            </div>
            <div className="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                    Getfile
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                    About
                  </a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#pablo">
                    9751872553
                    </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                    santhiyakm2002@gmail.com
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
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/bg30.jpg')"}}></div>
            <div className="content-center text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h1 className="title">Finding the Perfect.</h1>
                  <h4 className="description text-white">The haute couture crowds make stylish statements between shows during couture season in Paris...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/bg29.jpg')"}}></div>
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
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/bg28.jpg')"}}></div>
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
                    <div class="media">
                      <a class="pull-left" href="#pablo">
                        <div class="avatar">
                          <img class="media-object img-raised" alt="Tim Picture" src="assets/img/olivia.jpg"/>
                        </div>
                      </a>
                      <div class="media-body">
                        <h5 class="media-heading">John Camber
                          <small class="text-muted">&middot; Yesterday</small>
                        </h5>
                        <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                        <p> Don't forget, You're Awesome!</p>
                        <div class="media-footer">
                          <a href="#pablo" class="btn btn-primary btn-neutral pull-right" rel="tooltip" title="Reply to Comment">
                            <i class="now-ui-icons ui-1_send"></i> Reply
                          </a>
                          <a href="#pablo" class="btn btn-default btn-neutral pull-right">
                            <i class="now-ui-icons ui-2_favourite-28"></i> 25
                          </a>
                        </div>
                        <div class="media">
                          <a class="pull-left" href="#pablo">
                            <div class="avatar">
                              <img class="media-object img-raised" alt="64x64" src="assets/img/emily.jpg"/>
                            </div>
                          </a>
                          <div class="media-body">
                            <h5 class="media-heading">Tina Andrew
                              <small class="text-muted">&middot; 2 Days Ago</small>
                            </h5>
                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                            <p> Don't forget, You're Awesome!</p>
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
                    </div>
                    <div class="media">
                      <a class="pull-left" href="#pablo">
                        <div class="avatar">
                          <img class="media-object img-raised" alt="64x64" src="assets/img/james.jpg"/>
                        </div>
                      </a>
                      <div class="media-body">
                        <h5 class="media-heading">Rosa Thompson
                          <small class="text-muted">&middot; 2 Days Ago</small>
                        </h5>
                        <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                        <p> Don't forget, You're Awesome!</p>
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