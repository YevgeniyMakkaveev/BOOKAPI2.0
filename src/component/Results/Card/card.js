import React, { Component } from 'react'
import deafaultImg from '../../img/book-template.png'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../../service/actions';
import './card.css'

class CardCustom extends Component{

toModal = (id) => {
   this.props.getId(id)
}

checkData(data){
   if(!data){return ''}else return data}

checkImg(img){
   if(!img && img==="Не найденно"){return deafaultImg} else return img
}



render(){
const selfLink = this.props.selfLink
const {title, publisher, publishedDate, description}=this.props
const smallText = description ? description: ''
const authors = this.props.authors ? this.props.authors.toString() : ''
const categories = this.props.categories? this.props.categories[0]:''
const thumbnail = this.checkImg(this.props.thumbnail)


return(
<div className="card mb-3 single-card" onClick={()=>{this.toModal(selfLink)}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
         <p className="card-text"><small className="text-muted">{categories}</small></p>
        <h5 className="card-title">{this.checkData(title)}</h5>
        <h5 className="card-title">{this.checkData(authors)}</h5>
      </div>
        <div className="row g-0">
         <p className="card-text"><small className="text-muted">Издатель: {publisher},{publishedDate}</small></p>
            <div className="overview">
            {smallText}
            </div>
         </div>
      </div>
   </div>
</div>

)}}




const mapDispatchToProps = (dispatch) => {
   const {getId} = bindActionCreators(actions, dispatch)
   return { getId: (id) => {getId(id)
      }
   }
}

export default connect(null, mapDispatchToProps)(CardCustom)