import Item from "./Item";

export default function ListItem(props){
    

    return(
        
        <div className="panel panel-success ">

                    <div className="panel-heading card-header">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { props.listTask.length !== 0 ? (
                               props.listTask.map((item,key) =>
                               <Item 
                               item={item} 
                               key={key} 
                               index={key}
                                handleSave={props.handleSave}
                                actionTaskSelected={props.actionTaskSelected}
                                // actionToggleEdit={props.actionToggleEdit}
                               handleDelete={props.handleDelete}
                               onChangeSelected = {props.onChangeSelected}   
                               ></Item>
                               )
                            ) : (
                                <tr>
                                    <td colSpan="4"><h3>List Empty</h3></td>
                                </tr>
                            )
                                    
                            }
            
                        </tbody>
                    </table>
        </div>
    )
}