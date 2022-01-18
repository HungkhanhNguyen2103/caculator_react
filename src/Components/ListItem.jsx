import { useSelector } from "react-redux";
import Item from "./Item";

export default function ListItem(){
    
    const Itemlist = useSelector(state => state.item.list)

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
                            { Itemlist.length !== 0 ? (
                               Itemlist.map((item,key) =>
                               <Item 
                               item={item} 
                               key={key} 
                               index={key}
                            //     actionTaskSelected={props.actionTaskSelected}
                            //     // actionToggleEdit={props.actionToggleEdit}
                            //    onChangeSelected = {props.onChangeSelected}   
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