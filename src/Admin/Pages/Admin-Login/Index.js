import { useSelector,useDispatch } from "react-redux";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  { updatingDetails }  from "../../Slices/AdminLoginSlice";
import axios from "axios";


export const Admin_Login=()=>{
    let navigate=useNavigate();
   let statevalue=useSelector((e)=>e.AdminLogin).details
   let dispatch=useDispatch();


   let loginformData = new FormData()
   loginformData.append("email",statevalue.email)
   loginformData.append("password",statevalue.password)

  let loginbtn=()=>{

    axios.post("https://SanthiyaKumarMallika.pythonanywhere.com/adminlogin",loginformData).then((res)=>{
        if(res.data.status=="success"){
            alert("Login Successfully")
            navigate("/admin/panel")
            localStorage.setItem("admin_token",res.data.data.admin_token)

        }else{
            alert("Login Failed")
        }
    })
  }


   return(
        <div className="login-page sidebar-collapse">
        <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage:"url(../assets/img/pexels-duc-anh-nguyen-63701176-8289933.jpg)"}}></div>
            <nav class="navbar navbar-expand-lg navbar-transparent">
           <div class="container">
             <div class="navbar-translate m-1">
               <a class="navbar-brand" href="#pablo">Lights On Focus</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-bar bar1"></span>
                 <span class="navbar-toggler-bar bar2"></span>
                 <span class="navbar-toggler-bar bar3"></span>
               </button>
             </div>
             <div class="collapse navbar-collapse" id="example-navbar-transparent">
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
                                            <span className="input-group-text mt-4"><i className="now-ui-icons users_circle-08" ></i></span>
                                        </div>
                                        <input type="email" className="form-control mt-4" onKeyUp={(e)=>dispatch(updatingDetails({...statevalue, email:e.target.value}))} placeholder="Email"/>
                                    </div>
                                    <div className="input-group no-border input-lg" > 
                                        <div className="input-group-prepend">
                                            <span className="input-group-text mt-3"><i className="now-ui-icons text_caps-small"></i></span>
                                        </div>
                                        <input type="password" className="form-control mt-3"  onKeyUp={(e)=>dispatch(updatingDetails({...statevalue, password:e.target.value}))} placeholder="Password"/>
                                    </div> 
                                </div>
                                <div>
                                     <button onClick={loginbtn} className="btn btn-success ">Login</button>
                                 </div>
                               </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    
)
}
  
