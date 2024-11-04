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
        console.debug(reg)

        

        formData.append("name",reg.name)
        // formData.append("status",reg.status)
        formData.append("email",reg.email)
        formData.append("password",reg.password)
        formData.append("address",reg.address)
        formData.append("phone",reg.phone)
        formData.append("city",reg.city)
        formData.append("area",reg.area)
        formData.append("pin",reg.pin)

        if((reg.name =="")||(reg.email =="")||(reg.password =="")||(reg.address =="")||(reg.phone =="")||(reg.area =="")||(reg.city =="")||(reg.pin =="") ){
            alert ("pls fill the data")
          }else{

            // axios.post("https://agaram.academy/api/action.php?request=studio_create_studio", formData).then((e) => {
                axios.post("https://subhashs.pythonanywhere.com/registers",formData).then((e) => {

                // console.log(e.data.data)
                let value = e.data.status
                  
            
    
                if (value == "success") {
                    alert("Register sucessfully")
                    navigate("/studio/login")
                }
                     else {
                    alert("Register failed")
                }
    
               
                
            })
            
          }



    }


    return (
        
        <form >
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
                           
                           <button style={{backgroundColor:"orangered",
                                           border:"0px",
                                           borderRadius:"8px"
                                           }}> <Link to={"/Studio/login"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
                              //                                     <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                              //                                 </svg></i> LOGIN</Link></button>
                           
                        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* // <!-- End Navbar --> */}
        <div className="page-header header-filter" filter-color="">
            <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/back.jpg)",
                opacity:"0.9"
             }}></div>
            <div className="content">
                <div className="container ml-10">
                     
                     <h2 style={{color:"",
                                    fontFamily:"helvitica",
                                    marginBottom:"0px"
                                    
                                    
                    }}>Studio Registration  </h2>
                   
                    <div className="col-md-5 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                            <div className="" method="" action="">
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
                                        <input type="text" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, name: e.target.value }))} placeholder="Studio name" required />
                                    </div>

                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons ui-1_email-85"></i></span>
                                        </div>
                                        <input type="email" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, email: e.target.value }))} placeholder="Email" required/>
                                    </div>
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons text_caps-small"></i></span>
                                        </div>
                                        <input type="password" className="form-control" onKeyUp={(e) => dispatch(user({ ...reg, password: e.target.value }))}  placeholder="Password" required/>
                                    </div>

{/* --------------------------------------------------------------------------------------------------------------- */}
                               <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons shopping_shop"></i></span>
                                        </div>
                                        <input type="address" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, address: e.target.value }))}  placeholder="studio Residency" required/>
                                    </div>

                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons tech_mobile"></i></span>
                                        </div>
                                        <input type="number" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, phone: e.target.value }))}  placeholder="phone no" required/>
                                    </div>

                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons location_pin"></i></span>
                                        </div>
                                        <input type="text" className="form-control "  onKeyUp={(e) => dispatch(user({ ...reg,area: e.target.value }))}  placeholder="Area" required/>
                                    </div>

                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons location_compass-05"></i></span>
                                        </div>
                                        <input type="text" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, city: e.target.value }))}  placeholder="City" required/>
                                    </div>

                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="now-ui-icons objects_globe"></i></span>
                                        </div>
                                        <input type="number" className="form-control " onKeyUp={(e) => dispatch(user({ ...reg, pin: e.target.value }))}  placeholder="pincode"  required />
                                    </div>
                


 {/* ------------------------------------------------------------------------------------------------------------------------ */}
                                </div>
                                <div className="card-footer text-center">
                                    <button style={{width:"190px",
                                        marginLeft:"60px"
                                    }} className="btn btn-primary btn-round btn-lg btn-block butt" type="button" onClick={regist}>Register</button>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    </form>

    )
}