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
      formData.append("email",logvalue.email)
      formData.append("password",logvalue.password)
          if((logvalue.email=="")||(logvalue.password=="")){
            console.log("plese fill all the feilds")

          }
          else{
            axios.post("https://SanthiyaKumarMallika.pythonanywhere.com/login",formData).then((res)=>{
              if(res.data.status=="success"){
                alert("login successfull")
                dispatch(log(res.data.data))
                navigate("/user/studiolist")
                localStorage.setItem("user_token",res.data.data.user_token)
              }
              else{
                alert("login failed")
              }
          
            

          
      })
  }
   }

   return (
       <div className="login-page sidebar-collapse border border-light">
           <div className="page-header header-filter" >
               <div className="page-header-image" style={{backgroundImage:"url(../assets/img/pexels-alteredsnaps-12149885.jpg)"}}></div>
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
                           <li>
                        <div  aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/studio/login" className="text-light m-3">Studio</Link>
                          <Link to="/admin/login" className="text-light m-4">Admin</Link>
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
                                               <span className="input-group-text mt-1"><i className="now-ui-icons users_circle-08"></i></span>
                                           </div>
                                           <input type="email" className="form-control mt-1" onKeyUp={(e) => dispatch(log({ ...logvalue, email: e.target.value }))} placeholder="Email"/>
                                       </div>
                                       <div className="input-group no-border input-lg" style={{marginBottom:"0 !important"}}> 
                                           <div className="input-group-prepend">
                                               <span className="input-group-text mt-1"><i className="now-ui-icons text_caps-small"></i></span>
                                           </div>
                                           <input type="password" className="form-control mt-1" onKeyUp={(e) => dispatch(log({ ...logvalue, password: e.target.value }))} placeholder="Password"/>
                                       </div> 
                                   </div>
                                   <div className="pull-center mt-1">
                                   <button className="btn btn-success mt-2" type="submit" onClick={login}>Login</button>
                               
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
