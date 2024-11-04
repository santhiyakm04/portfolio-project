import "./index.css"
import axios from "axios"
import { details } from "../../Slices/registerslice"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


export const User_Register = () => {
    const navigate = useNavigate()
    const registervalue = useSelector((state) => state.register)
    const uservalue = registervalue.user_details
    console.log(registervalue)
    const dispatch = useDispatch()

    const register = () => {
        const formData = new FormData();

        formData.append("name", uservalue.name)
        formData.append("email", uservalue.email)
        formData.append("password", uservalue.password)
        formData.append("aadhar", uservalue.aadhar)
        formData.append("address", uservalue.address)
        formData.append("phone", uservalue.phone)
        formData.append("city", uservalue.city)
        formData.append("area", uservalue.area)
        formData.append("pin", uservalue.pin)
    //     axios.post(" https://agaram.academy/api/action.php?request=studio_create_user", formData).then((value) => {
    //         console.log(value)
    //         if (value.data.status=="success") {
    //             // alert("successfully registered")
    //         dispatch(details(value.data.data))
    //         navigate("/")
    //            }
    //            else{
    //             alert("fill the details")
    //           }
    //     })
    // }
    // const handleSubmit=(event)=>{
    //     event.preventDefault()
    //   }
    if((uservalue.name=="")||(uservalue.email=="")||(uservalue.password=="")||(uservalue.phone=="")||(uservalue.aadhar=="")||(uservalue.area=="")||(uservalue.city=="")||(uservalue.pin=="")||(uservalue.address=="")){
        console.log("plese fill all the feilds")
      }
      else{
        axios.post("https://SanthiyaKumarMallika.pythonanywhere.com/register", formData).then((value) => {
            console.log(value)
            if (value.data.status=="success") {
                // alert("successfully registered")
            // dispatch(details(value.data.data))
            navigate("/")
               }
               else{
                alert("fill the details")
              }
        })
    }
      }
    return (
        <div class="signup-page sidebar-collapse">
            {/* <form onSubmit={handleSubmit}> */}

            <nav className="navbar navbar-expand-lg bg-white navbar-absolute navbar-transparent">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit-pro/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                            {/* <h3>PORTFOLIO</h3> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                    <div class="navbar-translate">
                  <a class="navbar-brand" href="#pablo">Lights On Focus</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
      
                    </div>
                    <div class="collapse navbar-collapse" id="example-navbar-transparent">
                  <ul class="navbar-nav ml-auto">
                           <li>
                        <div  aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/" className="text-light m-3">Login</Link>
                        </div>
                      </li>
                  </ul>
                </div>
                </div>
            </nav>

            {/* <!-- End Navbar --> */}

            <div className="page-header header-filter" filter-color="black">
                <div className="page-header-image" style={{ backgroundImage: "url(../assets/img/pexels-umaraffan499-22185.jpg)"}}></div>
                <div className="content w-800">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4 m-auto p-3  ">
                                {/* <div className="card card-signup ">
                                    <div className="card-body  cardsize" > */}
                                        <h2 className="card-title text-center p-5">User Register</h2>

                                        <div className="input-group no-border input-lg ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="text" className="form-control bg-dark text-light" onKeyUp={(e) => dispatch(details({ ...uservalue, name: e.target.value }))} placeholder="Name" requried />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text border border-dark"></span>
                                            </div>
                                            {/* <input type="email" className="form-control" onKeyUp={(e)=>dispatch(details({...uservalue,email:e.target.value}))} placeholder="Email" /> */}
                                            <input type="email" className="form-control bg-dark text-light " onKeyUp={(e) => dispatch(details({ ...uservalue, email: e.target.value }))} placeholder="email"  requried />

                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="password" className="form-control bg-dark text-light" onKeyUp={(e) => dispatch(details({ ...uservalue, password: e.target.value }))} placeholder="password"  requried />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="number" className="form-control bg-dark text-light " onKeyUp={(e) => dispatch(details({ ...uservalue, aadhar: e.target.value }))} placeholder="Aaadhar number"  requried />
                                        </div>

                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="text" className="form-control bg-dark text-light " onKeyUp={(e) => dispatch(details({ ...uservalue, address: e.target.value }))} placeholder="Address"  requried />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="number" className="form-control bg-dark text-light " onKeyUp={(e) => dispatch(details({ ...uservalue, phone: e.target.value }))} placeholder="Phone Number"  requried />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"></span>
                                                </div>
                                                <input type="text" className="form-control bg-dark text-light " onKeyUp={(e)=>dispatch(details({...uservalue,city:e.target.value}))} placeholder="city"  requried/>
                                            </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="text" className="form-control bg-dark text-light " onKeyUp={(e) => dispatch(details({ ...uservalue, area: e.target.value }))} placeholder="Area" requried />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"></span>
                                            </div>
                                            <input type="number" className="form-control bg-dark text-light" onKeyUp={(e) => dispatch(details({ ...uservalue, pin: e.target.value }))} placeholder="Pincode"  requried />
                                        </div>
                                        <div className="p-2">
                                            <button className="btn btn-success" onClick={register}>Register</button>
                                            <Link to="/">Login</Link>
                                        </div>
                                        {/* <h6>{JSON.stringify(uservalue)}</h6> */}

                                    {/* </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className=" container ">

                        {/* <div className="copyright" id="copyright"> */}
                            {/* &copy;
                            <script>
                                document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                            </script>, Designed by */}
                            {/* <a href="Portfolio" target="_blank">Portfolio</a>. Coded by
                            <a href="Agaram softwares" target="_blank">Agaram softwares</a>.
                        </div> */}
                    </div>
                </footer>
            </div>
            {/* </form> */}
        </div>

    )
}