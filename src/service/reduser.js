const initState = {
tearm: '',
field: "all",
priority: "relevance",
getId: null
}

const reducer =(state=initState, action)=>{
switch(action.type){
 case 'BOOK_LOAD':
  return{getId: action.payload}
  case 'BOOK_CLEAR':
    return{getId: null}
  case 'GET_TEARM':
   return{
    tearm: action.tearm,
    priority: action.priority,
    field: action.field
   }
   case 'CLEAR_TEARM':
    return{
    tearm: '',
    field: "all",
    priority: "relevance",
    }
 default: return state;
 }
 
}

export default reducer