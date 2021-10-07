
import EditItem from "./EditItem"
import { useState } from "react"

export default function Item(props){
    const task  = {
        item :props.item
    }
    
    const [toggleEdit,setToggleEdit] = useState(false)

    const handleEdit=()=>{      
        props.actionTaskSelected(task)
        // props.actionToggleEdit(!toggleEdit)
         setToggleEdit(!toggleEdit)   
        //  console.log(task);
    }
    
    return(
        <>

                     <tr>
                            <td className="text-center">{props.index}</td>
                            <td>{props.item.Taskname}</td>
                            <td className="text-center">
                            {
                                props.item.level === "0" ? (
                                    <span className="label_1 success">Small</span>
                                ) : props.item.level === "1" ? (
                                    <span className="label_1 warning">Medium</span>
                                ) : (
                                    <span className="label_1 danger">High</span>
                                )
                            }
                            </td>
                            
                            <td className="button-item">
                                <button type="button" className="btn btn-warning btn-sm" onClick={()=>handleEdit()}>Edit</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={(item)=>props.handleDelete(task)}>Delete</button>
                            </td>
                        </tr>       
                   <EditItem
                   handleEdit={handleEdit}
                   toggleEdit={toggleEdit}
                   index={props.index}
                   item = {props.item}
                   handleSave={props.handleSave}
                   onChangeSelected = {props.onChangeSelected}
                   />
        </>                
    )
}