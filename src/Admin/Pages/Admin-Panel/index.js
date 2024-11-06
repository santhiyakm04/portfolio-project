import axios from "axios"
import { useEffect, useState} from "react"
import {  Link, useNavigate } from "react-router-dom"




export const Admin_Panel=()=>{
    

    const[userList,setUserList]=useState([])
    const[userData,setUserData]=useState([])
    const[record,setrecord]=useState(userList)
    const[studio,setstudio]=useState(userData)
    
        const navigate=useNavigate();
        const Display=()=>{

            axios.get("https://SanthiyaKumarMallika.pythonanywhere.com/list").then((datavalue)=>{
                setUserList(datavalue.data)
                setrecord(datavalue.data)
                // console.log(datavalue)
    
            })
    
        }
        const Filter=(event)=>{
            setrecord(userList.filter(e=>e.user_Name?.toLowerCase().includes(event.target.value.toLowerCase())))
          }
        
    const Deletelist=(idvalue)=>{

        axios.delete(`https://SanthiyaKumarMallika.pythonanywhere.com/delete/${idvalue}`).then((value)=>{
            console.log(value)
            Display()
        })
        }
         
        const Viewlist=(idvalue)=>{
            navigate(`/admin/userview/${idvalue}`)
            }

        useEffect(()=>{
            Display()
            // console.log("test")
        },[])


        const Studio=()=>{
            axios.get("https://SanthiyaKumarMallika.pythonanywhere.com/studiolist").then((datavalue)=>{
                setUserData(datavalue.data)
                setstudio(datavalue.data)
                // console.log(datavalue)
    
            })
    
        }
        const Search=(event)=>{
            setstudio(userData.filter(e=>e.studio_name?.toLowerCase().includes(event.target.value.toLowerCase())))
          }
        
    const Delete=(idvalue)=>{

        axios.delete(`https://SanthiyaKumarMallika.pythonanywhere.com/deletestudio/${idvalue}`).then((val)=>{
            console.log(val)

            Studio()
        })
        }
         
        const View=(idvalue)=>{
            navigate(`/admin/studioview/${idvalue}`)
            }

        useEffect(()=>{
            Studio()
            // console.log("test")
        },[])

           


    return(
        
        <div className="index-page sidebar-collapse">

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
                      <a class="nav-link" href="#pablo">
                        <Link to={"/admin/login"} className="back"><i class="now-ui-icons arrows-1_share-66"></i> logout</Link>
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>

             <div className="col-md-10 ml-auto col-xl-6 mr-auto m-5">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#userlist" >User_List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#studiolist">Studio_List</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content text-center">
                    <div className="tab-pane active" id="userlist">
                    <table className="table mt-5 w-75 mx-auto">
    <thead className=" table-dark ">
        <tr>
        <th colSpan={5} className="text-end"><input type="text" onChange={Filter}  placeholder="Search Here"/></th>
        </tr>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phoneno</th>
                <th>Delete</th>
                <th>View</th>

            </tr>
        </thead>
        <tbody>
        {record.map((each)=>
               
            <tr className="table-light">
                <td>{each.user_Name}</td>
                <td>{each.user_Email}</td>
                <td>{each.phone}</td>
                <td><button onClick={()=>Deletelist(each.user_id)}>Delete</button></td>
                <td><button onClick={()=>Viewlist(each.user_id)}>View</button></td>
            </tr>
        )}
        </tbody>
    </table>
                    </div>
                    <div className="tab-pane" id="studiolist" >
                    <table className="table mt-5 w-75 mx-auto">
    <thead className=" table-dark ">
        <tr>
        <th colSpan={5} className="text-end"><input type="text" onChange={Search}  placeholder="Search Here"/></th>
        </tr>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Place</th>
                <th>Delete</th>
                <th>View</th>

            </tr>
        </thead>
        <tbody>
        {studio.map((each)=>
               
            <tr className="table-light">
                <td>{each.studio_name}</td>
                <td>{each.studio_email}</td>
                <td>{each.city}</td>
                <td><button onClick={()=>Delete(each.studio_id)}>Delete</button></td>
                <td><button onClick={()=>View(each.studio_id)}>View</button></td>

            </tr>
        )}
        </tbody>
    </table>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
      
    )

}