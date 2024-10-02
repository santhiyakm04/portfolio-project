import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { user } from '../../Slices/Registerslice';
import { Link } from 'react-router-dom';




export const Studio_Register = () => {
 const navigate =  useNavigate();
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
              navigate("/studio_login")

        })
       
    }
    

    return (
        <div class="signup-page sidebar-collapse">


            {/* <!-- End Navbar --> */}
            
            <div className="page-header header-filter" filter-color="black">
                <div className="page-header-image"  style={{backgroundImage:"url(../assets/img/bg18.jpg)"}}></div>
               
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
                 
                  {/* <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        
                        <Link to ={"/Studio_login"} className="back"><i> </i> Go back</Link>
                      </a>
                    </li> */}
                
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        
                        <Link to ={"/Studio_login"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></i> Go back</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

               
               
               
               
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
                                            
                                           
                                            {/* <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="now-ui-icons users_circle-08"></i></span>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Aadhaar No" onKeyUp={(e) => dispatch(user({ ...reg,aadhar:e.target.value }))} autocomplete="fullname"/>
                                            </div> */}
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