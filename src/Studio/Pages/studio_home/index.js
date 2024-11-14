import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studio } from '../../Slices/profileslice'
import { pack } from '../../Slices/profileslice'

export const Studio_Order = () => {
    const det = useSelector((state) => state.details).studioProfile;
    //   console.log(det)
    const dispatch = useDispatch();
    const [packages, setPackages] = useState({ name: "", amount: "" })

    
    const [order, setorder] = useState([])
    const[search,setsearch]=useState(order)
    

    const logup = useSelector((state) => state.logs).studiolog;
    const studio_id=localStorage.getItem("studio_id")
    const studioId=logup?.data?.id || studio_id;

    const addlist = () => {
        dispatch(pack([...det.packages, packages]))

    }

    const studio_token=localStorage.getItem("studio_token")
    const headers = {'Authorization':`Bearer ${studio_token}`}

    const userdetail = () => {

        let formData = new FormData()
        formData.append("studio_id",logup.data.id)
        formData.append("name_of_founder",det.name_of_founder)
        formData.append("no_of_branches",det.no_of_branches)
        formData.append("no_of_achievements",det.no_of_achievements)
        formData.append("no_of_employees",det.no_of_employees)
        formData.append("about_us",det.about_us)
        formData.append("packages",JSON.stringify(det.packages))
        axios.put("https://SanthiyaKumarMallika.pythonanywhere.com/studioupdate",formData,{headers}).then((e) =>{

        })
    }

    const orderlist = () => {
        axios.get(`http://santhiyakumarmallika.pythonanywhere.com/bookinglist/${studioId}`).then((n) => {
             console.log(n.data.data)
            setorder(n.data.data)
            setsearch(n.data.data)
            
        })
    }
    useEffect(() => {
        orderlist()
    },[])
    
    const Deletedlist=(idvalue)=>{
        axios.delete(`https://santhiyakumarmallika.pythonanywhere.com/deletebooking/${idvalue}`).then((value) => {
            console.log(value)
            orderlist()
        })
        }

       
    
        const Filter=(event)=>{
            setsearch(order.filter(e=>e.event_date?.toLowerCase().includes(event.target.value.toLowerCase())))
          }
    
return (
        <>
<nav class="navbar navbar-expand-lg bg-primary ">
              <div class="container">
              <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                    </div>
                <div class="navbar-translate ">
                  <a class="navbar-brand" href="#pablo">LIGHTS ON FOCUS</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-primary">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link">
                        <Link to={"/Studio/login"} className="back"><i class="now-ui-icons arrows-1_share-66"></i> logout</Link>
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>
            <div className="col-md-12 ">

                <div className="nav-align-center">
                    <ul className="nav nav-pills nav-pills-primary " role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#profile" role="tablist">
                                <b>update profile</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#home" role="tablist">
                                <b>orders</b>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content gallery ">
                    <div className="tab-pane active" id="profile" role="tabpanel">
                        <div className="row mx-auto updatechild">
                <form role="form" className="forms" id="contact-form" method="post">
                            <label className="mt-5">Name of founder:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter ur name"     onKeyUp={(e) => dispatch(studio({ ...det, name_of_founder: e.target.value }))} autocomplete="name" />
                                </div>

                                <label className="colrs">No of branches:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of branches" onKeyUp={(e) => dispatch(studio({ ...det, no_of_branches: e.target.value }))} aria-label="branches" autocomplete="branches" />
                                </div>

                                <label className="colrs">No of achievements:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of achievements" onKeyUp={(e) => dispatch(studio({ ...det, no_of_achievements: e.target.value }))} aria-label="achievements" autocomplete="achievements" />
                                </div>

                                <label className="colrs">No of employees:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="No of employees" onKeyUp={(e) => dispatch(studio({ ...det, no_of_employees: e.target.value }))} aria-label="employees" autocomplete="employees" />
                                </div>

                                <label className="colrs">Amount for basic  package:</label>
                               
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount"  onChange={(e) => setPackages({ name: "basic", amount: e.target.value })} aria-label="amount" autocomplete="amount" />
                                </div>
                                <button  className="btn-primary border-light ml-5" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label className="colrs">Amount for silver  package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "silver", amount: e.target.value })} aria-label="amount" autocomplete="amount" />
                                </div>
                                <button  className="btn-primary border-light ml-5" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label className="colrs">Amount for gold package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "gold", amount: e.target.value })} aria-label="amount" autocomplete="amount" />

                                    
                                </div>
                                <button  className="btn-primary border-light ml-5" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <br>
                                </br>

                                <label className="colrs">Amount for platinum package:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="enter ur package amount" onChange={(e) => setPackages({ name: "platinum", amount: e.target.value })} aria-label="amount" autocomplete="amount" />

                                    

                                </div>
                                <button  className="btn-primary border-light ml-5" type="button" onClick={() => addlist()}>confirm amount</button>
                                <br>
                                </br>
                                <label className="colrs">About us:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class=""></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="about us" onKeyUp={(e) => dispatch(studio({ ...det, about_us: e.target.value }))} aria-label="amount" autocomplete="amount" />
                                </div>
                                <br></br>
                                <div className="submit text-center">
                                    <button type='button' className="btn btn-primary btn-round btn-lg" onClick={() => userdetail()}>upload</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="tab-pane" id="home" role="tabpanel">
                        <div className="row">


                        {/* <div class="card  card-form-horizontal cardb">
                    <div class="card-body">
                      <form method="" action="">
                        <div class="row">
                          <div class="col-sm-4 searchbar">
                            <div class="   input-group ">
                              <div class="input-group-prepend">
                                <span class="input-group-text mx-auto"><i class="now-ui-icons ui-1_zoom-bold"></i></span>
                              </div>
                              <input type="text" className="form-control mx-auto" onChange={Filter} placeholder="  YYYY-MM-DD"/>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}


                            <table className="table mt-5 w-75 mx-auto" >
                                <thead className="table-dark">
                                <tr>
                               <th colSpan={7} className="text-end"><input type="number" onChange={Filter}  placeholder="Search date Here"/></th>
                               </tr>
                                    <tr>                                        
                                        <th>Date</th>
                                        <th>package</th>
                                        <th>Event</th>
                                        <th>time</th>
                                        <th>Place</th>
                                        <th>location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {search.map((each) =>

                                        <tr>
                                            <td>{each.event_date}</td>
                                            <td>{each.packages}</td>
                                            <td>{each.event_type}</td>
                                            <td>{each.event_time}</td>
                                            <td>{each.venue}</td>
                                            <td>{each.location}</td>
                                            <td><button  className="btn btn-danger" onClick={()=>Deletedlist(each.id)}> <i className="now-ui-icons ui-1_simple-remove"></i></button></td>


                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
