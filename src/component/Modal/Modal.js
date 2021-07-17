import React, {Component} from 'react'
import deafaultImg from '../img/book-template.png'
import './Modal.css'
import * as actions from '../../service/actions'
import {connect} from 'react-redux'
import GetApi from '../../service/getApi'
import { Modal,  Row, Col } from "react-bootstrap"


class ModalWind extends Component{
state={
bookData: [],
isOpen: true
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
  bookData: data.volumeInfo,
  isOpen: true
 })
})
console.log(this.state.bookData)
}

checkInfo=(data)=>{
 if(!data){return "No Data"}else return data
}

getImg=(img)=>{
 if (img.thumbnail){return img.thumbnail} else{return deafaultImg}
}

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({
    isOpen: false,
    bookData: []
  });


render(){
 if (!this.props.imgLink){return null}
 const {title, description, categories, authors,publisher,publishedDate} = this.state.bookData
 const bigImg = this.state.bookData.imageLinks ? this.getImg(this.state.bookData.imageLinks):deafaultImg
 const allAuthors=authors? authors.toString(): "Ошибка"


 
 return(
  <Modal show={this.state.isOpen} onHide={this.closeModal} onClick={this.closeModal} dialogClassName="my-modal">
  <Modal.Header>  
  <Modal.Title ><p className="table-text">{this.checkInfo(categories)}</p></Modal.Title>
    
  </Modal.Header>
  <Row md={4} >
  <Col md>
  <img className="modal-img" src={bigImg} alt="тест"/>
  </Col>
  <Col>
    <h2 className="bigger-stuff"> {title} </h2>
  </Col>
  <Col>
  <ul className="table-text">
    <li>
     {allAuthors} 
    </li>
      {this.checkInfo(publisher)}
    <li>
    {this.checkInfo(publishedDate)}
    </li>
  </ul>
  </Col>
  </Row>
  <Modal.Body>
    <p className="desc-text">{description}</p></Modal.Body>
</Modal>

 )
}
}


const mapStateToProps = (res) =>{
 return{
  imgLink: res.modalReducer.selfId
 }
 
}

export default connect(mapStateToProps)(ModalWind)