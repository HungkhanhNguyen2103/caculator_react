import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addNewItem } from "../actions/item";

export default function Form(props){
  
    //dispatch
    const dispatchItem = useDispatch()

    //field input 
    const [fieldItem,setFieldItem] = useState({
        id : uuidv4(),
        taskname: '',
        level : '0'
    })

    //gửi vào list
    const onhandleSubmit=(e)=>{
        e.preventDefault();
        props.showToggle()
        //dispatch action
        const actionItem = addNewItem(fieldItem)
        // console.log(fieldItem);
        dispatchItem(actionItem);
    }

    //nhận trường input nhập vào
    const onhandleChange = (e) => {
        const {name,value} = e.target;
        setFieldItem({
            ...fieldItem,
            [name] : value 
        })

    }
    //cancel
    const cancelForm = () => {
        props.showToggle()
        setFieldItem({
            id : uuidv4(),
            taskname: '',
            level : '0'
        })
    }
    
    return(
        <>
        { props.toggle ? (
            <div className="row marginB10 ">
                    <div className="col-md-offset-6 col-md-6 " style={{padding:"0%"}}>
                        <form className="form-inline display1" id="create-form" onSubmit={onhandleSubmit}  >
                            <div className="form-group" style={{width:'50%'}}>
                                <input type="text" className="form-control"  id="id-name" placeholder="Item Name" name="taskname" value={fieldItem.taskname} onChange={onhandleChange}/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="level" value={fieldItem.level} onChange={onhandleChange}>
                                    <option value={0}>Small</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>High</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit" />
                            <input type="button" className="btn btn-secondary" value="Cancel" onClick={cancelForm}/>
                        </form>
                        
                    </div>
            </div>
         ) : (
             <div className='row marginB10'></div>
         )
        }
         </>
    )
}