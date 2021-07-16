import React, {Component} from 'react'
import deafaultImg from '../img/book-template.png'
import './Modal.css'
import * as actions from '../../service/actions'
import {connect} from 'react-redux'
import GetApi from '../../service/getApi'
class Modal extends Component{
state={
bookData: []
}

 getApi=new GetApi()

 componentDidUpdate(prevProp){
  if (this.props.imgLink !== prevProp.imgLink) {
   this.updateIndo()
  }}

updateIndo=()=>{
const id = this.props.imgLink
this.getApi.getSingleBook(id).then((data) => {
 this.setState({
  bookData: data.volumeInfo
 })
})}

checkInfo=(data)=>{
 if(!data){return "No Data"}else return data
}

getImg=(img)=>{
 if (img.thumbnail){return img.thumbnail} else{return deafaultImg}
}

render(){
 if (!this.props.imgLink){return null}
 const {title, description} = this.checkInfo(this.state.bookData)
 const bigImg = this.state.bookData.imageLinks ? this.getImg(this.state.bookData.imageLinks):deafaultImg
 

 
 return(
<div className="body">
 <button onClick={()=>{console.log(this.state.bookData) }}>Стейт модалы</button>
 
<img src={bigImg} alt="все сломалось"/>
<h1>{title}</h1>
<p>{description}</p>
</div>

 )
}
}
const mapStateToProps = (res) =>{
 return{
  imgLink: res.modalReducer.selfId
 }
 
}

export default connect(mapStateToProps)(Modal)