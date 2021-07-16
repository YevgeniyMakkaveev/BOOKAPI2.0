import React, { Component } from 'react'
import deafaultImg from '../../img/book-template.png'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../../service/actions'
class Card extends Component{

toModal = (id) => {
   this.props.getId(id)
}

checkData(data){
   if(!data){return "No Data"}else return data}

checkImg(img){
   if(!img && img==="Не найденно"){return deafaultImg} else return img
}

render(){
const selfLink = this.props.selfLink
const {title, publisher, publishedDate, description}=this.checkData(this.props)
const authors= this.props.authors? this.props.authors.toString():"No Data"
const thumbnail = this.checkImg(this.props.thumbnail)


return(
   <div className="single-card" onClick={()=>{this.toModal(selfLink)}}>
      <img src={thumbnail} alt=""/>
       <h1>{title}</h1>    
       <div className="overview">
      <h3>{authors}</h3>
      <h3>{publisher},{publishedDate} </h3>
      <p> {description}</p>
    </div>
    </div>
)
}
}

const mapDispatchToProps = (dispatch) => {
   const {
      getId
   } = bindActionCreators(actions, dispatch)
   return {
      getId: (id) => {
         getId(id)
      }
   }
}

export default connect(null, mapDispatchToProps)(Card)