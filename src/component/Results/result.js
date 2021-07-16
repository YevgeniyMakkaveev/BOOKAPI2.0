import React,{Component} from 'react'
import GetApi from '../../service/getApi'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Card from './Card';
import * as actions from '../../service/actions'
import './result.css'

class BookCard extends Component{
   
    state = {
     bookList: [],
     hasContent: false,
     index: 0,
     needUpdate: false
    }
    
getApi=new GetApi()



componentDidUpdate(prevProp){
 if(this.props.tearm===''){this.setState({ bookList: [],index:0,hasContent: false})}
 else if (this.props.tearm !== prevProp.tearm||this.state.hasContent===false) {
  this.updateBook()
 } else if(this.state.needUpdate){
  this.updateBook()
 }}

 updateBook=()=>{
const{tearm,field, priority} =this.props
const {index, bookList} = this.state
this.getApi.getNormalBooks(tearm, field, priority, index).then((data) => {
  console.log(data)
  const newData = bookList.concat(data.items)
  this.setState({
  bookList: newData,
  hasContent: true,
  needUpdate: false})
  console.log(this.state.bookList.length)
 })}

 onGetMore=()=> {
  const oldIndex=this.state.index
  const newIndex=+oldIndex+30
  this.setState({
   index: newIndex,
   needUpdate: true
  })}



drawPicture(data){
 let idInner = this.state.index
 return (data.map((item)=>{
  idInner++
  const selfLink = item.selfLink
  const {title, publisher,publishedDate,description, authors} = item.volumeInfo
  const {thumbnail} = item.volumeInfo.imageLinks? item.volumeInfo.imageLinks: "Не найденно"
  console.log(title, publisher, publishedDate, description, thumbnail)
   return <Card key={idInner} title={title} publisher={publisher} publishedDate={publishedDate} description={description} thumbnail={thumbnail} authors={authors} selfLink={selfLink}  />
 }))}

 render(){
  const {bookList,hasContent}=this.state

  if (!hasContent){return <p> тест</p>} 
  const data= this.drawPicture(bookList)
  
  
  return(
   <div className="to-side"> 
    {data}
   <button onClick={this.onGetMore}> Больше</button>
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