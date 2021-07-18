import { combineReducers } from 'redux'
const initState = {
tearm: null,
field: "all",
priority: "relevance",
}

const reducerSearch =(state=initState, action)=>{
switch(action.type){
  case 'GET_TEARM':
   return{
    tearm: action.tearm,
    priority: action.priority,
    field: action.field,
   }
   case 'CLEAR_TEARM':
    return{
    tearm: null,
    field: "all",
    priority: "relevance",
   
    } 
 default: return state;
 }}

const stanImg={
  selfId: null
}
 const modalReducer = (state = stanImg, action)=> {
   switch (action.type){
    case 'GET_ID':
    return{
      selfId: action.selfId
    }
    case 'CLEAR_ID':
      return{
        selfId: null
      }
    default: return state
   }
 }

 const reducer = combineReducers({
   reducerSearch,
   modalReducer
 })

export default reducer