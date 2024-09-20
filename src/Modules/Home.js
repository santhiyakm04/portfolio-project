export const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
                <div className="container">
                    <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-header">Dropdown header</a>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">One more separated link</a>
                        </div>
                    </div>
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit-pro/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                            Now Ui Kit Pro
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown">
                                    <i className="now-ui-icons design_app"></i>
                                    <p>Components</p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                                    <a className="dropdown-item" href="../index.html">
                                        <i className="now-ui-icons business_chart-pie-36"></i> All components
                                    </a>
                                    <a className="dropdown-item" target="_blank" href="https://demos.creative-tim.com/now-ui-kit-pro/docs/1.0/getting-started/introduction.html">
                                        <i className="now-ui-icons design_bullet-list-67"></i> Documentation
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                    <i className="now-ui-icons files_paper" aria-hidden="true"></i>
                                    <p>Sections</p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="../sections.html#headers">
                                        <i className="now-ui-icons shopping_box"></i> Headers
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#features">
                                        <i className="now-ui-icons ui-2_settings-90"></i> Features
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#blogs">
                                        <i className="now-ui-icons text_align-left"></i> Blogs
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#teams">
                                        <i className="now-ui-icons sport_user-run"></i> Teams
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#projects">
                                        <i className="now-ui-icons education_paper"></i> Projects
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#pricing">
                                        <i className="now-ui-icons business_money-coins"></i> Pricing
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#testimonials">
                                        <i className="now-ui-icons ui-2_chat-round"></i> Testimonials
                                    </a>
                                    <a className="dropdown-item" href="../sections.html#contactus">
                                        <i className="now-ui-icons tech_mobile"></i> Contact Us
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                    <i className="now-ui-icons design_image" aria-hidden="true"></i>
                                    <p>Examples</p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="../examples/about-us.html">
                                        <i className="now-ui-icons business_bulb-63"></i> About-us
                                    </a>
                                    <a className="dropdown-item" href="../examples/blog-post.html">
                                        <i className="now-ui-icons text_align-left"></i> Blog Post
                                    </a>
                                    <a className="dropdown-item" href="../examples/blog-posts.html">
                                        <i className="now-ui-icons design_bullet-list-67"></i> Blog Posts
                                    </a>
                                    <a className="dropdown-item" href="../examples/contact-us.html">
                                        <i className="now-ui-icons location_pin"></i> Contact Us
                                    </a>
                                    <a className="dropdown-item" href="../examples/landing-page.html">
                                        <i className="now-ui-icons education_paper"></i> Landing Page
                                    </a>
                                    <a className="dropdown-item" href="../examples/login-page.html">
                                        <i className="now-ui-icons users_circle-08"></i> Login Page
                                    </a>
                                    <a className="dropdown-item" href="../examples/pricing.html">
                                        <i className="now-ui-icons business_money-coins"></i> Pricing
                                    </a>
                                    <a className="dropdown-item" href="../examples/ecommerce.html">
                                        <i className="now-ui-icons shopping_shop"></i> Ecommerce Page
                                    </a>
                                    <a className="dropdown-item" href="../examples/product-page.html">
                                        <i className="now-ui-icons shopping_bag-16"></i> Product Page
                                    </a>
                                    <a className="dropdown-item" href="../examples/profile-page.html">
                                        <i className="now-ui-icons users_single-02"></i> Profile Page
                                    </a>
                                    <a className="dropdown-item" href="../examples/signup-page.html">
                                        <i className="now-ui-icons tech_mobile"></i> Signup Page
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">
                                    <p>Buy Now</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* // <!-- End Navbar --> */}
            <div className="page-header header-filter" filter-color="orange">
                <div className="page-header-image" style={{backgroundImage:"url(../assets/img/login.jpg)"}}></div>
                <div className="content">
                    <div className="container">
                        <div className="col-md-5 ml-auto mr-auto">
                            <div className="card card-login card-plain">
                                <form className="form" method="" action="">
                                    <div className="card-header text-center">
                                        <div className="logo-container">
                                            <img src="./assets/img/now-logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="First Name..." />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Last Name..." />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Get Started</a>
                                    </div>
                                    <div className="pull-center mt-3">
                                        <h6>
                                            <a href="#pablo" className="link footer-link">Create Account</a>
                                        </h6>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className=" container ">
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.creative-tim.com">
                                        Creative Tim
                                    </a>
                                </li>
                                <li>
                                    <a href="http://presentation.creative-tim.com">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="http://blog.creative-tim.com">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                       
                    </div>
                </footer>
            </div>
        </div>
        
    )
}
