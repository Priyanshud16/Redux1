 const defaultState={
    email:"",
    password:""
}
    
export const LoginReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'email':{
            return {...state,email:action.payload}
        };
        case 'password':{
            return {...state,password:action.payload}
        }
        case 'SUCCESS':{
            return {...state,email:action.payload,password:action.payload}
        }
        default:{
            return state
        }
    }
}