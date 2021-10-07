export default function Search(props){
    
    return(
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search item name" id="input-search" onChange={props.actionSearch}/>
                            <span className="input-group-btn">
                                <button className="btn btn-info" type="button" style={{color:"white"}} onClick={props.handleClear}>Clear!</button>
                            </span>
                        </div>
        </div>
    )
}