import React, {Component} from 'react'
import deafaultImg from '../img/book-template.png'
import './Modal.css'
import * as actions from '../../service/actions'
import {connect} from 'react-redux'
import GetApi from '../../service/getApi'
import { Modal,  Row, Col } from "react-bootstrap"
import { bindActionCreators} from 'redux';
import CustomSpinner from '../spinner'


class ModalWind extends Component{
state={
bookData: [],
isOpen: true,
isLoading: false
}

 getApi=new GetApi()

 componentDidUpdate(prevProp){
  if (this.props.bookLink !== prevProp.bookLink) {
    this.setState({
      isLoading: true
    })
   this.updateIndo()
  }}

updateIndo=()=>{
const id = this.props.bookLink
if(id){
this.getApi.getSingleBook(id).then((data) => {
 this.setState({
  bookData: data.volumeInfo,
  isOpen: true,
  isLoading: false
 })
})}

}

checkInfo=(data)=>{
 if(!data){return "Не указаны"}else return data
}

getImg=(img)=>{
 if (img.medium){return img.thumbnail}else if(img.small){return img.small} else{return deafaultImg}
}

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => {this.setState({
    isOpen: false,
    bookData: []
  })
this.props.clearId()}


render(){

 if (!this.props.bookLink){return null}
 else if(this.state.isLoading){return <div className="spin-load"> <CustomSpinner/></div> }
 const {title, description, categories, authors,publisher,publishedDate} = this.state.bookData
 const bigImg = this.state.bookData.imageLinks ? this.getImg(this.state.bookData.imageLinks):deafaultImg
 const allAuthors=authors? authors.toString(): "Авторы не указаны"
const text=description? description: "Нет описания"

 
 return(
  <Modal show={this.state.isOpen} onHide={this.closeModal} onClick={this.closeModal} dialogClassName="my-modal">
    <Modal.Header>  
      <Modal.Title >Категории: {this.checkInfo(categories)}</Modal.Title> 
    </Modal.Header>
  <Row md={4} >
    <Col md>
      <img className="modal-img" src={bigImg} alt="тест"/>
    </Col>
    <Col>
      <h2 className="bigger-stuff text-justify"> {title} </h2>
    </Col>
    <Col>
      <ul className="list-text text-justify">
        <li>
         Авторы: {allAuthors} 
        </li>
        <li>
         Издатель: {this.checkInfo(publisher)}
        </li>
        <li>
         Год издания: {this.checkInfo(publishedDate)}
        </li>
      </ul>
    </Col>
  </Row>
    <Modal.Body>
      <div className="desc-text">{text}</div></Modal.Body>
</Modal>

 )}}


const mapStateToProps = (res) =>{
 return{
  bookLink: res.modalReducer.selfId
 }
 }
const mapDispatchToProps =(dispatch) =>{
  const {clearId} = bindActionCreators(actions, dispatch)
  return{clearId,}}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWind)