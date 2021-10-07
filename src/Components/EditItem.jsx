export default function EditItem(props){

    return (
        <>
            {
            !props.toggleEdit ? (
                 <></>
            ) : (
                <tr >
                    <td className="text-center">{props.index}</td>
                    <td><input type="text" className="form-control" defaultValue={props.item.Taskname} name="Taskname" onChange={props.onChangeSelected}/></td>
                    <td className="text-center">
                        <select className="form-control" name="level" defaultValue={props.item.level} onChange={props.onChangeSelected}>
                            <option value={"0"}>Small</option>
                            <option value={"1"}>Medium</option>
                            <option value={"2"}>High</option>
                        </select>
                    </td>
                    <td >
                        <button type="button" className="btn btn-link btn-sm" onClick={props.handleEdit}>Cancel</button>
                        <button type="button" className="btn btn-success btn-sm" onClick={props.handleSave} onBlur={props.handleEdit}>Save</button>
                    </td>
                </tr>
            )
            }      
        </>
    )
}