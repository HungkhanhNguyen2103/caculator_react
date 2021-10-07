import Dropdown from 'react-bootstrap/Dropdown'

export default function Sort(props){
    return(
        // 
        <>
            <Dropdown className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{display:"flex"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={(title,level)=>props.handleChangeSort("name","asc")}>Name ASC</Dropdown.Item>
                    <Dropdown.Item onClick={(title,level)=>props.handleChangeSort("name" ,"desc")}>Name DESC</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={(title,level)=>props.handleChangeSort("level","asc")}>Level ASC</Dropdown.Item>
                    <Dropdown.Item onClick={(title,level)=>props.handleChangeSort("level" ,"desc")}>Level DESC</Dropdown.Item>
                </Dropdown.Menu>
                <div className="sort-by"><span className="label label-success label-medium">{props.compare.title} - {props.compare.level}</span></div>
            </Dropdown> 

        </>
    )
}