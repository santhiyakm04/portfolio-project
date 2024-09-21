export const User_Register = () => {
    return (
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
                <div className="page-header-image"  style={{backgroundImage:"url(../assets/img/bg18.jpg)"}}></div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-4 mx-auto">
                                <div className="card card-signup">
                                    <div className="card-body  cardsize" >
                                        <h4 className="card-title text-center">User Register</h4>
                                        {/* <div className="social text-center">
                                            <button className="btn btn-icon btn-round btn-twitter">
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button className="btn btn-icon btn-round btn-dribbble">
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button className="btn btn-icon btn-round btn-facebook">
                                                <i className="fab fa-facebook"> </i>
                                            </button>
                                            <h5 className="card-description">User Register </h5>
                                        </div> */}
                                        <form className="form" method="" action="">                     
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Name" autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons ui-1_email-85"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Email" autocomplete="email"/>
                                            </div>
                                           
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="password" autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="phonenumber" autocomplete="fullname"/>
                                            </div>
                                           
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Address" autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Area" autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="city" autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Pincode" autocomplete="fullname"/>
                                            </div>

                                           
                                           
                                            {/* <!-- If you want to add a checkbox to this form, uncomment this code --> */}
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        I agree to the terms and
                                                        <a href="#something">conditions</a>.
                                                </label>
                                            </div>
                                            <div className="card-footer text-center">
                                                <a href="#pablo" className="btn btn-primary btn-round btn-lg">Register</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className=" container ">
                        
                        <div className="copyright" id="copyright">
                            &copy;
                            <script>
                                document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                            </script>, Designed by
                            <a href="Portfolio" target="_blank">Portfolio</a>. Coded by
                            <a href="Agaram softwares" target="_blank">Agaram softwares</a>.
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}