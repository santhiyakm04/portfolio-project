// import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { user } from '../../Slices/Registerslice';




export const Studio_Register = () => {
//  const navigate =  useNavigate();
    const reg = useSelector((state) => state.regis).studioReg;
    
    const dispatch = useDispatch();
    const regist = () => {
        let formData = new FormData()

        formData.append("name", reg.name)
        formData.append("email", reg.email)
        formData.append("password", reg.password) 
        formData.append("aadhar", reg.adhaar)
        formData.append("address", reg.address)
        formData.append("phone", reg.phone)
        formData.append("city", reg.city)
        formData.append("area", reg.area)
        formData.append("pin", reg.pin)

        axios.post("http://agaram.academy/api/action.php?request=create_candidate", formData).then((e) => {
              
        })
        // navigate("/login")
    }
    // onKeyUp={(e) => dispatch(user({ ...regist,  e.target.value }))}

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
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Studio Register</h4>
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
                                            <h5 className="card-description">Studio Register </h5>
                                        </div> */}
                                        <div className="form" method="" action="">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Studio Name" onKeyUp={(e) => dispatch(user({ ...reg,name:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                           
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons ui-1_email-85"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Studio Email"onKeyUp={(e) => dispatch(user({ ...reg,email:e.target.value }))} autocomplete="email"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="Password" onKeyUp={(e) => dispatch(user({ ...reg,password:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                            
                                           
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Aadhaar No" onKeyUp={(e) => dispatch(user({ ...reg,aadhar:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Studio Address" onKeyUp={(e) => dispatch(user({ ...reg,address:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Phone Number" onKeyUp={(e) => dispatch(user({ ...reg,phone:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                           
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Area" onKeyUp={(e) => dispatch(user({ ...reg,area:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="city" onKeyUp={(e) => dispatch(user({ ...reg,city:e.target.value }))} autocomplete="fullname"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Pincode" onKeyUp={(e) => dispatch(user({ ...reg,pin:e.target.value }))}  autocomplete="fullname"/>
                                            </div>
                                           
                                            
                                           
                                           
                                    
                                            <div className="card-footer text-center">
                                                <button className="btn btn-primary btn-round btn-lg"  onClick={regist}>Register</button>
                                            </div>
                                        </div>
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
                            <a href="portfolio" target="_blank">Portfolio</a>. Coded by
                            <a href="agaram" target="_blank">Agaram softwares</a>.
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}