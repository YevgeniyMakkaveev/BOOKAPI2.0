import React,{Component} from 'react'
import GetApi from '../../service/getApi'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import CardCustom from './Card';
import CustomSpinner from '../spinner';
import './result.css'

class BookCard extends Component{
   
    state = {
     bookList: [],
     index: 0,
     totalItems: null,
     isLoading: true,
     needUpdate: false
    }
    
getApi=new GetApi()



componentDidUpdate(prevProp){
  if (this.props.tearm !== prevProp.tearm) {
  this.getInit(prevProp)
 } else if(this.state.needUpdate){
  this.updateBook(prevProp)
 }}

 updateBook=(prevProp)=>{
const{tearm,field, priority} =this.props
const {index, bookList} = this.state
this.getApi.getNormalBooks(tearm, field, priority, index).then((data) => {
  console.log(data)
  let newData
   if(prevProp.tearm===this.props.tearm){newData=bookList.concat(data.items)}else{newData=data.items}
  this.setState({
  bookList: newData,
  isLoading: false,
  totalItems: data.totalItems,
  needUpdate: false})
  
 })}


 onGetMore=()=> {
  const oldIndex=this.state.index
  const newIndex=+oldIndex+30
  this.setState({
   index: newIndex,
   isLoading: true,
   needUpdate: true
  })}

getInit=(prevProp)=>{
  this.setState({
    index: 0,
    isLoading: true
  })
this.updateBook(prevProp)
}

drawPicture(data){
 let idInner = this.state.index
 return (data.map((item)=>{
  idInner++
  const selfLink = item.selfLink
  const {title, publisher,publishedDate,description, authors, categories} = item.volumeInfo
  const {thumbnail} = item.volumeInfo.imageLinks? item.volumeInfo.imageLinks: "Не найденно"
  console.log(title, publisher, publishedDate, description, thumbnail)
   return <CardCustom key={idInner} title={title} publisher={publisher} publishedDate={publishedDate} description={description} thumbnail={thumbnail} authors={authors} categories={categories} selfLink={selfLink}  />
 }))}

 render(){
  const {bookList, isLoading,totalItems}=this.state

  if (!this.props.tearm){return null} 
  else if (isLoading) {
    console.log(`Лоадинг`)
    return <div className="spin-load"><CustomSpinner/></div>
  }
 
  const data= this.drawPicture(bookList)
  
  
  return(
    <div className="component-nest">
      <p className="mb-3">Всего найденно {totalItems} </p>
   < div className = "row row-cols-1 row-cols-md-4 g-4 mt-2" >
    {data}
   </div>
       <div className="d-grid gap-2">
   <button className="btn btn-danger"  onClick={this.onGetMore}> Load More</button>
   </div>
   </div>
  )  
 }
}

const mapStateToProps = (res) => {
 return {
  tearm: res.reducerSearch.tearm,
  field: res.reducerSearch.field,
  priority: res.reducerSearch.priority,
 }}


// const mapDispatchToProps=(dispatch)=>{
//  const {getId}=bindActionCreators(actions, dispatch)
//  return{
//   getId: (id)=>{getId(id)}
//  }
// }

export default connect(mapStateToProps)(BookCard)