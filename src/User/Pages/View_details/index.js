import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const View_Details=()=>{
    
    const bookdetail=useSelector((state)=>state.book)
    const bookvalue=bookdetail.book_details
    
     return(
      <div>
      <nav class="navbar navbar-expand-lg bg-primary p-0">
                <div class="container">
                  <h4 className="text-light">PORTFOLIO</h4>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="example-navbar-icons">
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

          
       <div className="col-md-6 col-lg-5 mx-auto m-5">
                <div className="card card-pricing card-background">
                  <div className="card-body">
                      <ul>
                      <li><h5>{bookvalue.date}</h5></li>
                      <li><h5>{bookvalue.time}</h5></li>
                      <li><h5>{bookvalue.location}</h5></li>
                      <li><h5>{bookvalue.venue}</h5></li>
                      <li><h5>{bookvalue.event_type}</h5></li>
                      <li><h5>{bookvalue.package}</h5></li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
)
}