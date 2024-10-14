import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { user } from '../../Slices/Registerslice';
import { Link } from 'react-router-dom';




export const Studio_Register = () => {
    const navigate = useNavigate();
    const reg = useSelector((state) => state.regis).studioReg;

    const dispatch = useDispatch();
    const regist = () => {
        let formData = new FormData()

        formData.append("name", reg.name)
        formData.append("status", reg.status)
        formData.append("email", reg.email)
        formData.append("password", reg.password)
        formData.append("address", reg.address)
        formData.append("phone", reg.phone)
        formData.append("city", reg.city)
        formData.append("area", reg.area)
        formData.append("pin", reg.pin)


        axios.post("https://agaram.academy/api/action.php?request=studio_create_studio", formData).then((e) => {
            console.log(e)

            alert("Register sucessfully")
            navigate("/studio/login")

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
                            <li className="nav-item dropdown">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* // <!-- End Navbar --> */}
            <div className="page-header header-filter" filter-color="orange">
                <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/login.jpg)" }}></div>
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
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, name: e.target.value }))} placeholder="Studio name" />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, email: e.target.value }))} placeholder="Email" />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                            </div>
                                            <input type="password" className="form-control" onKeyUp={(e) => dispatch(user({ ...reg, password: e.target.value }))}  placeholder="Password" />
                                        </div>

    {/* --------------------------------------------------------------------------------------------------------------- */}
                                   <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="address" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, address: e.target.value }))}  placeholder="studio Residency" />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="number" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, phone: e.target.value }))}  placeholder="phone no" />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control "  onKeyUp={(e) => dispatch(user({ ...reg, area: e.target.value }))}  placeholder="Area" />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="text" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, city: e.target.value }))}  placeholder="City" />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                            </div>
                                            <input type="number" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, pin: e.target.value }))}  placeholder="pincode" />
                                        </div>
                    


     {/* ------------------------------------------------------------------------------------------------------------------------ */}
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn btn-primary btn-round btn-lg btn-block" onClick={regist}>Register</button>
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

