// import { Login_Component } from "../../../Component/Login";
import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userlog } from '../../Slices/loginslice';
import { Link } from 'react-router-dom';




export const Studio_Login = () => {
    const navigate = useNavigate();
    const logup = useSelector((state) => state.logs).studiolog;
    console.log(logup)
    const dispatch = useDispatch();
    const logged = () => {
        let formData = new FormData()


        formData.append("email", logup.email)
        formData.append("password", logup.password)


        // axios.post("https://agaram.academy/api/action.php?request=studio_studio_login", formData).then((n) => {
            axios.post("https://subhashs.pythonanywhere.com/logins", formData).then((n) => {
                
                console.log(n.data.data)

            let s = n.data.status

            if (s == "success") {
                alert("login sucessfully")
                navigate("/Studio/Orders")
                dispatch(userlog(n.data))

            } else {
                alert("login failed")
            }
        })




    }




    return (
        <div className="login-page sidebar-collapse">
            <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
                <div className="container">
                    <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                    </div>
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit-pro/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                            LIGHTS ON FOCUS
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                           
                           <Link to={"/user/login"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
                           //                                     <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                           //                                 </svg></i> Go back</Link>
                        
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* // <!-- End Navbar --> */}
            <div className="page-header header-filter" filter-color="orange">
                <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/back3.jpg)" }}></div>
                <div className="content">
                    <div className="container">
                        <div className="col-md-5 ml-auto mr-auto">
                            <div className="card card-login card-plain">
                                <div className="form" method="" action="">
                                    <div className="card-header text-center">
                                        <div className="logo-container">
                                            <img src="./assets/img/now-logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body" >
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons ui-1_email-85"></i></span>
                                            </div>
                                            <input type="text" className="form-control " onKeyUp={(n) => dispatch(userlog({ ...logup, email: n.target.value }))} placeholder="Email" />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                            </div>
                                            <input type="password" className="form-control" onKeyUp={(n) => dispatch(userlog({ ...logup, password: n.target.value }))} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn btn-primary btn-round btn-lg btn-block " onClick={logged}>Login</button>
                                    </div>
                                    <div className="pull-center mt-3">
                                        <h6>
                                            <p className="child">Don't have an account?</p>< Link to={"/studio/register"} className="link footer-link">Register</Link>
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

