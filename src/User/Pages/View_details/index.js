import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const View_Details = () => {

  const bookdetail = useSelector((state) => state.book)
  const bookvalue = bookdetail.book_details

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning p-0">
        <div class="container">
          <h4 className="text-light">Lights On Focus</h4>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
          <div class="collapse navbar-collapse" id="example-navbar-icons">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link">
                <Link to="/" className='text-light'>Logout</Link>
              </a>
               </li>
               <li class="nav-item">
                <a class="nav-link">
                <Link to="/user/bookdetails" className='text-light'>Back</Link>
              </a>
               </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="col-md-6 col-lg-5 mx-auto m-5">
        <div className="card card-pricing card-background">
          <div className="card-body">
            <ul>
                      <li><h5>Event Date : {bookvalue.event_date}</h5></li>
                      <li><h5>Event Time : {bookvalue.event_time}</h5></li>
                      <li><h5>Location : {bookvalue.location}</h5></li>
                      <li><h5>Venue : {bookvalue.venue}</h5></li>
                      <li><h5>Event Type : {bookvalue.event_type}</h5></li>
                      <li><h5>Package : {bookvalue.packages}</h5></li>
                    </ul>
          </div>
        </div>
      </div>
    </div>
  )
}