import { combineReducers } from 'redux'
const initState = {
tearm: '',
field: "all",
priority: "relevance",
}

const reducerSearch =(state=initState, action)=>{
switch(action.type){
 case 'BOOK_LOAD':
  return{getId: action.payload}
  case 'BOOK_CLEAR':
    return{getId: null}
  case 'GET_TEARM':
   return{
    tearm: action.tearm,
    priority: action.priority,
    field: action.field,
   
   }
   case 'CLEAR_TEARM':
    return{
    tearm: '',
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
    default: return state
   }
 }

 const reducer = combineReducers({
   reducerSearch,
   modalReducer
 })

export default reducer