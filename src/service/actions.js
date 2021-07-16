const bookLoad =(bookId)=>{
 return {
  type: 'BOOK_LOAD',
  payload: bookId
 }
}
const bookClear=()=>{
 return{
  type: 'BOOK_CLEAR'
 }
}

const getTearm=(tearm, field, priority)=>{
 return{
  type: 'GET_TEARM',
  tearm: tearm,
  field: field,
  priority: priority
 }
}

const clearTearm=()=>{
 return{
  type: 'CLEAR_TEARM'
 }
}

export {
 bookLoad, bookClear, getTearm, clearTearm
}