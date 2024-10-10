import { useEffect, useState } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Studio_Listing = ()=>{
  let navigate=useNavigate()

const [studioData, setStudioData]=useState([])
const [searchFilterData,setSearchData]=useState(studioData)

useEffect(()=>{
  axios.get("http://agaram.academy/api/action.php?request=studio_getAllStudio").then((res)=>{
    setStudioData(res.data.data)
    setSearchData(res.data.data)
})
},[])

const Viewlist=(idvalue)=>{
  navigate(`/user/studiodetails/${idvalue}`)
}

const Filterbtn =(event)=>{
  setSearchData(studioData.filter(e=>e.name.toLowerCase().includes(event.target.value.toLowerCase())))
}

 

    return(
      <>
         <div className="header-3">
        <nav className="navbar navbar-expand-lg bg-warning lsting-navbar">
          <div className="container">
            <div className="navbar-translate">
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
              {/* <a className="navbar-brand" href="#pablo">Portfolio</a> */}
            </div>
            
            <div className="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#pablo">
                    Message
                  </a>
                    </li>
                <li class="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i className="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        
                   <Link to="/">Log out</Link>
                        </div>
                      </li>
              </ul>
            </div>
           
          </div>
        </nav>
        <div>
          
        </div>
       
  
      {/* <div id="carouselExampleIndicators" className="carousel slide">

      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="page-header header-filter">
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/pexels-minhaz-box-55594885-13575969.jpg')"}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/pexels-valentina-maros-128709290-13283497.jpg')"}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="page-header header-filter">
            <div className="page-header-image" style={{backgroundImage: "url('../assets/img/pexels-moon-wedding-studio-0915310196-20455850-8686986.jpg')"}}></div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <i className="now-ui-icons arrows-1_minimal-left"></i>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <i className="now-ui-icons arrows-1_minimal-right"></i>
      </a>
    </div> */}
    <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-minhaz-box-55594885-13575969.jpg')" }}></div>
              <div className="content-center text-center">
                <div className="row">
                  <div className="col-md-8 ">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-valentina-maros-128709290-13283497.jpg')" }}></div>
              <div className="content-center">
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="page-header-image" style={{ backgroundImage: "url('/assets/img/pexels-moon-wedding-studio-0915310196-20455850-8686986.jpg')" }}></div>
              <div className="content-center text-center">
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </div>

    <div className="team-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">All  Studios</h2>
              <h3 className=" text-dark">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h3>
            </div>
          </div>
          <div className='row justify-content-end'>
          <div class="col-sm-6 col-lg-3 pull-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user-circle"></i></span>
                  </div>
                  <input type="text" className="form-control searchbtn" onChange={Filterbtn} placeholder="Type for Search" />
                </div>
              </div>
          </div>
         
          <div className="row">
          {searchFilterData.map((each)=>{
            return(
<div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="card-image">
                      <a href="#pablo">
                        <img className="img img-raised rounded" src="../assets/img/images.jpeg" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h3 className="card-title">{each.name}</h3>
                      <h5 className="card-title">{each.city}</h5>
                      <h5 className="card-title">{each.phone}</h5>
                    <button class="btn btn-facebook" onClick={()=>Viewlist(each.id)}>view</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
                
          })}
            
          </div>
        </div>
      </div>
      </div>

        </>
    )


}