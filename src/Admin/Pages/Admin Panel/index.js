import axios from "axios"
import { useEffect, useState} from "react"
import {  useNavigate } from "react-router-dom"



export const Admin_Panel=()=>{
    

    const[userList,setUserList]=useState([])
    const[record,setrecord]=useState(userList)
        const navigate=useNavigate();
        const Display=()=>{
            axios.post(" http://agaram.academy/api/action.php?request=getAllMembers").then((datavalue)=>{
                setUserList(datavalue.data.data)
                setrecord(datavalue.data.data)
                // console.log(datavalue)
    
            })
    
        }
        const Filter=(event)=>{
            setrecord(userList.filter(e=>e.name.toLowerCase().includes(event.target.value)))
          }
        
    const Deletelist=(idvalue)=>{
        axios.get(` http://agaram.academy/api/action.php?request=removeMember&id=${idvalue}`).then((value)=>{
            // console.log(value)
            Display()
        })
        }
         
        const Viewlist=(idvalue)=>{
            navigate(`/admin/view/${idvalue}`)
            }

        useEffect(()=>{
            Display()
            // console.log("test")
        },[])

           


    return(
        <div className="index-page sidebar-collapse">
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
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.phone}</td>
                <td><button onClick={()=>Deletelist(each.id)}>Delete</button></td>
                <td><button onClick={()=>Viewlist(each.id)}>View</button></td>
            </tr>
        )}
        </tbody>
    </table>
                    </div>
                    <div className="tab-pane" id="studiolist" >
                    <table className="table mt-5 w-75 mx-auto">
    <thead className=" table-dark ">
        <tr>
        <th colSpan={5} className="text-end"><input type="text" onChange={Filter}  placeholder="Search Here"/></th>
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
        {record.map((each)=>
               
            <tr className="table-light">
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.city}</td>
                <td><button onClick={()=>Deletelist(each.id)}>Delete</button></td>
                <td><button onClick={()=>Viewlist(each.id)}>View</button></td>

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