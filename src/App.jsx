import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import AddItem from './Components/AddItem';
import taskItem from './mockdata/taskItem';
import Form from './Components/Form';
import ListItem from './Components/ListItem';
import Search from './Components/Search';
import Sort from './Components/Sort';
import Titles from './Components/Titles';



function App () {
        //bat tat toggle
        const [toggle,setToggle] = useState(false)
        
        
        //obj khoi tao
        const [fields,setFields] = useState({
            id : uuidv4(),
            Taskname : "",
            level : "0",
        })

        //arraylist
        const [listTask,setListTask] = useState(taskItem)
        
        //arraylistSave
        const [listTaskSave,setListTaskSave] = useState(taskItem)

        // task duoc edit
        const [taskSelected,setTaskSeclected] = useState({
            id : uuidv4(),
            Taskname : "",
            level : "0"
        })


        const [compare,setCompare] = useState({
            title : "name",
            level : "asc"
        })

        //funcion task duoc edit
        const actionTaskSelected=(task)=>{
            setTaskSeclected({
                id : task.item.id,
                Taskname : task.item.Taskname,
                level : task.item.level
            })
            // console.log("App",task);
   
        }
        
        //bat tat form
        const showToggle=()=>{
            setToggle(!toggle)
        }

        //nhap form
        const onhandleChange=(e)=>{
            const {name,value} = e.target;
            setFields({
                ...fields, //lay truong cu
                [name] : value,
            })
        }
        
        //submit
        const onhandleSubmit=(e)=>{
            e.preventDefault(); //khong load lại trang
            showToggle(!toggle)
            setFields({
                id :  uuidv4(),
                Taskname : "",
                level : "0",
            })
            //lay bang array          
            setListTask([
                ...listTask,
                fields            
            ]);
            setListTaskSave([
                ...listTask,
                fields  
            ])
        }

        //tat form
        const cancelForm = ()=>{
            showToggle(!toggle)
            setFields({
                id :  uuidv4(),
                Taskname : "",
                level : "0",
            })
        }

        //edit task
        const onChangeSelected=(e)=>{
            
            const {name,value} = e.target 
            setTaskSeclected({
                ...taskSelected,
                [name] : value
            })

        }

        const handleChangeSort=(title,level)=>{

            setCompare({
                title : title,
                level : level
            })
            if(title === "name"){
                if(level === "asc" )
                setListTask(listTask.sort((a,b)=> a.Taskname > b.Taskname ? 1 : -1))
                if(level === "desc" )
                setListTask(listTask.sort((a,b)=> a.Taskname < b.Taskname ? 1 : -1))
            }
            else{
                if(level === "asc" )
                setListTask(listTask.sort((a,b)=> a.level > b.level ? 1 : -1))
                if(level === "desc" )
                setListTask(listTask.sort((a,b)=> a.level < b.level ? 1 : -1))
            }
        }

        //Search
        const actionSearch=(e)=>{
            const value = e.target.value;
            const search = new RegExp (value , 'i')
            // console.log(search);
            setListTask(listTaskSave.filter(item => item.Taskname.match(search)))       
        }

        //Clear Search
        const handleClear=()=>{
            document.getElementById("input-search").value = ""
            setListTask(listTaskSave)
        }
  
        //luu task edit
        const handleSave=()=>{
            // console.log(taskSelected);
            const index = listTask.findIndex((item) => item.id === taskSelected.id)
            // console.log(index);
            setFields(listTask.splice(index,1,taskSelected));
            swal({
                title: "Lưu thành công!",
                icon: "success",
                button: "OK",
            });
        }
    

        //xoa task
        const handleDelete=(taskSelect)=>{
            swal({
                title: "Bạn có muốn xóa: " + taskSelect.item.Taskname + " ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
               })
               .then((willDelete) => {
                if (willDelete) {
                  swal({
                    title: "Item đã được xóa bỏ",
                    icon: "success",
                  });
                  setListTask(listTask.filter((item) => item.id !== taskSelect.item.id));
                }
              });
            
        }

        return (
            <div className="container">
                <Titles/>
                <div className="row" > 
                    <Search
                    actionSearch = {actionSearch}
                    handleClear={handleClear}
                    />     
                    <Sort
                    compare={compare}
                    handleChangeSort={handleChangeSort}
                    />
                    <AddItem
                    toggle={toggle}
                    showToggle={showToggle}
                    />
            
                </div>
                <div className="row">
                    <Form 
                    toggle={toggle} 
                    showToggle={showToggle}   
                    fields={fields}
                    onhandleChange={onhandleChange}
                    onhandleSubmit = {onhandleSubmit}
                    cancelForm={cancelForm}
                    />  
                </div>
                       
                
                <ListItem
                listTask={listTask}
                handleSave={handleSave}
                handleDelete={handleDelete}
                onChangeSelected = {onChangeSelected}  
                actionTaskSelected={actionTaskSelected}    
                />
            </div>
        ); 
}

export default App;