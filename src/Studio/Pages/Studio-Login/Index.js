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
        axios.post("https://SanthiyaKumarMallika.pythonanywhere.com/studiologin",formData).then((n) => {
        console.log(n.data.data)
        let s = n.data.status
            if (s=="success"){
                alert("login sucessfully")
                navigate("/studio/home")
                dispatch(userlog(n.data))
            } else 
                {
                alert("login failed")
                }
        })
}
return (
        <div className="login-page sidebar-collapse">
        <div className="page-header header-filter" >
            <div className="page-header-image" style={{backgroundImage:"url(../assets/img/pexels-eva-bronzini-6064385.jpg)"}}></div>
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
                                            <span className="input-group-text mt-2"><i className="now-ui-icons users_circle-08" ></i></span>
                                        </div>
                                        <input type="email" className="form-control mt-2" onKeyUp={(n) => dispatch(userlog({ ...logup, email: n.target.value }))} placeholder="Email"/>
                                    </div>
                                    <div className="input-group no-border input-lg" > 
                                        <div className="input-group-prepend">
                                            <span className="input-group-text mt-2"><i className="now-ui-icons text_caps-small"></i></span>
                                        </div>
                                        <input type="password" className="form-control mt-2" onKeyUp={(n) => dispatch(userlog({ ...logup, password: n.target.value }))} placeholder="Password"/>
                                    </div> 
                                </div>
                                <div className="pull-center mt-1">
                                <button className="btn btn-success " type="submit" onClick={logged}>Login</button>
                            
                                    <h6>
                                     <i className="child">Don't have an account?</i>   <Link to="/studio/register" className="text-success">Register</Link>
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

    


