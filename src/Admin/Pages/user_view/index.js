import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const User_View=()=>{
    const [user, setuser] = useState({})
    const { user_id } = useParams()
    useEffect(() => {
        axios.get(`http://agaram.academy/api/action.php?request=studio_getUserDetails&user_id=${user_id}`).then((View) => {
            setuser(View.data.data)
        })
    },[])

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
              <div class="container">
                <div class="collapse navbar-collapse" id="example-navbar-primary">
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i class="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/user_login" className='text-dark m-5'>Logout</Link>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container-fluid  text-dark">
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Name:</h4>
            <h4 className="col-6">{user.name}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Email:</h4>
            <h4 className="col-6">{user.email}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Password:</h4>
            <h4 className="col-6">{user.password}</h4>
        </div>
        {/* <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Aadhar:</h4>
            <h4 className="col-6">{view.aadhar}</h4>
        </div> */}
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Address:</h4>
            <h4 className="col-6">{user.address}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Phone:</h4>
            <h4 className="col-6 ">{user.phone}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">City:</h4>
            <h4 className="col-6">{user.city}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Area:</h4>
            <h4 className="col-6">{user.area}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">PinCode:</h4>
            <h4 className="col-6">{user.pin}</h4>
        </div>
    </div>     
        </div>
    )
}