import taskItem from "../mockdata/taskItem";

const initialState = {
    listSave  : taskItem,
    list : taskItem,
    activeId : null //selected
}


export const itemReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_ITEM':{
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list : newList,
                listSave : newList
            };
        }
        case 'DELETE_ITEM':{
            const newList = state.list.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                list : newList,
                listSave : newList
            }
        }
        case 'EDIT_ITEM':{
            const index = state.list.findIndex(item => item.id === action.payload.id)
            state.list.splice(index,1,action.payload)
            const newList = [...state.list]
            return {
                ...state,
                list : newList,
                listSave : newList
            }    
        }
        case 'SEARCH_ITEM':{
            state.list = [...state.listSave]
            const newList = [...state.list]     
            return {
                ...state,
                list : newList.filter(item => item.taskname.match(action.payload)) 
            }  
        }
        case 'SORT_ITEM':{
                const newList = [...state.list]
                if (action.payload.title === "name") {
                    if (action.payload.level === "asc")
                return {
                    ...state,
                    list : newList.sort((a, b) => (a.taskname > b.taskname ? 1 : -1))  
                }
                if (action.payload.level === "desc")
                    return {
                    ...state,
                    list : newList.sort((a, b) => (a.taskname < b.taskname ? 1 : -1))  
                    }
            } else {
                if (action.payload.level === "asc")
                    return {
                    ...state,
                    list : newList.sort((a, b) => (a.level > b.level ? 1 : -1))  
                    }                 
                else return {
                    ...state,
                    list : newList.sort((a, b) => (a.level < b.level ? 1 : -1))  
                    } 
            } 
        }
        default:
            return state;
    }
}