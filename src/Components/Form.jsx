
export default function Form(props){
  
    
    return(
        <>
        { props.toggle ? (
            <div className="row marginB10 ">
                    <div className="col-md-offset-6 col-md-6 " style={{padding:"0%"}}>
                        <form className="form-inline display1" id="create-form" onSubmit={props.onhandleSubmit}  >
                            <div className="form-group" style={{width:'50%'}}>
                                <input type="text" className="form-control"  id="id-name" placeholder="Item Name" name="Taskname" value={props.fields.Taskname} onChange={props.onhandleChange}/>
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="level" value={props.fields.level} onChange={props.onhandleChange}>
                                    <option value={0}>Small</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>High</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit" />
                            <input type="button" className="btn btn-secondary" value="Cancel" onClick={props.cancelForm}/>
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