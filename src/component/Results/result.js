import React,{Component} from 'react'
import GetApi from '../../service/getApi'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Card from './Card';

class BookCard extends Component{
getApi=new GetApi()
state = {
 bookList: [],
 hasContent: false
}


componentDidUpdate(prevProp){
 if (this.props.tearm !== prevProp.tearm&& this.props.tearm!=='') {
  const{tearm,field, priority} =this.props
 this.getApi.getNormalBooks(tearm, field, priority).then((data) => {

  console.log(data)
  this.setState({
  bookList: data.items,
  hasContent: true})
 })
 }}

drawPicture(data){
 let innerId = 0
 return (data.map((item)=>{
  const {title, publisher,publishedDate,description, authors, id} = item.volumeInfo
  innerId++
  const {thumbnail} = item.volumeInfo.imageLinks? item.volumeInfo.imageLinks: "Не найденно"
  console.log(title, publisher, publishedDate, description, thumbnail)
  return <Card key={id+innerId} title={title} publisher={publisher} publishedDate={publishedDate} description={description} thumbnail={thumbnail} authors={authors}  />

 }))}

 render(){
  const {bookList,hasContent}=this.state

  if (!hasContent){return <p> тест</p>} 
  const data= this.drawPicture(bookList)
  
  
  return(
   <div>
    {data}
   <button onClick={()=>{console.log(this.state)}}> Стейт</button>
   </div>
  )
   

  
 }
}

const mapStateToProps = (res) => {
 return {
  tearm: res.tearm,
  field: res.field,
  priority: res.priority
 }
}
export default connect(mapStateToProps)(BookCard)