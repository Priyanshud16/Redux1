const defaultTodo=[
    {
        id:1,
        title:"Learn Redux",
        status:false,
    },
    {
        id:2,
        title:"Learn React",
        status:true
    }
]


export const TodoReducer=(state=defaultTodo,action)=>{
switch(action.type){
    case 'ADD_TODO':{
        return [...state,action.payload]
    }
    default:{
        return state
    }
}
}