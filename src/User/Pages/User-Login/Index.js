import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { log } from "../../Slices/loginslice";
import { Link, useNavigate } from "react-router-dom";
export const User_Login = () => {
    const navigate=useNavigate()
   const details=useSelector((state)=>state.login)
   const logvalue=details.logData
   console.log(logvalue)
   const dispatch=useDispatch()

   const login = () => {
      const formData=new FormData();
      formData.append("request",logvalue.request) 
      formData.append("email",logvalue.email)
      formData.append("password",logvalue.password)
      axios.post("https://agaram.academy/api/action.php?request=studio_user_login",formData).then((res)=>{
        //   console.log(log)
          if(res.data.status=="success"){
            // alert("login successfull")
            dispatch(log(res.data.data))
            navigate("/user/studiolist")
          }
          else{
            alert("login failed")
          }
      })
  }

   return (
       <div className="login-page sidebar-collapse">
           {/* <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
               <div className="container">
                   <div className="navbar-translate"> */}
                   {/* <h3> PORTFOLIO</h3> */}
                       {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-bar top-bar"></span>
                           <span className="navbar-toggler-bar middle-bar"></span>
                           <span className="navbar-toggler-bar bottom-bar"></span>
                       </button>
                   </div>
                   <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item dropdown">
                           </li>
                           <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <b>
                           Others
                          </b>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/Studio_Login" className="text-dark m-5">Studio</Link><br/>
                          <Link to="/admin/login" className="text-dark m-5">Admin</Link>
                        </div>
                      </li>
                       </ul>
                   </div>
               </div>
           </nav> */}
           {/* // <!-- End Navbar --> */}
           {/* <nav class="navbar navbar-expand-lg navbar-transparent">
              <div class="container">
                <div class="navbar-translate">
                  <a class="navbar-brand" href="#pablo">Lights On Focus</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-transparent">
                  <ul class="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                           </li>
                           <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <b>
                           Others
                          </b>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/Studio_Login" className="text-dark m-5">Studio</Link><br/>
                          <Link to="/admin/login" className="text-dark m-5">Admin</Link>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </nav> */}
           <div className="page-header header-filter" >
               <div className="page-header-image" style={{backgroundImage:"url(../assets/img/pexels-bertellifotografia-2376991.jpg)"}}></div>
               <nav class="navbar navbar-expand-lg navbar-transparent">
              <div class="container">
                <div class="navbar-translate">
                  <a class="navbar-brand" href="#pablo">Lights On Focus</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-transparent">
                  <ul class="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                           </li>
                           <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <b>
                           Others
                          </b>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/Studio_Login" className="text-dark m-5">Studio</Link><br/>
                          <Link to="/admin/login" className="text-dark m-5">Admin</Link>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
               <div className="content">
                   <div className="container">
                       <div className="col-md-5 ml-auto mr-auto">
                           <div className="card card-login card-plain">
                              
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
                                           <input type="email" className="form-control" onKeyUp={(e) => dispatch(log({ ...logvalue, email: e.target.value }))} placeholder="Email" />
                                       </div>
                                       <div className="input-group no-border input-lg" style={{marginBottom:"0 !important"}}> 
                                           <div className="input-group-prepend">
                                               <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                           </div>
                                           <input type="password" className="form-control" onKeyUp={(e) => dispatch(log({ ...logvalue, password: e.target.value }))} placeholder="Password" />
                                       </div> 
                                   </div>
                                   <div className="pull-center mt-1">
                                   <button className="btn btn-success mt-3" onClick={login}>Login</button>
                               
                                       <h6>
                                        <i className="child">Don't have an account?</i>   <Link to="/user/register" className="text-success">Register</Link>
                                       </h6>
                                   </div>
                                  
            
                           </div>
                       </div>
                   </div>
               </div>
           
           </div>
       </div>
       
   )
}
