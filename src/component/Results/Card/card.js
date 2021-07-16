import React, { Component } from 'react'
import deafaultImg from './img/book-template.png'

export default class Card extends Component{
checkData(data){
   if(!data){return "No Data"}else return data}

checkImg(img){
   if(!img && img==="Не найденно"){return deafaultImg} else return img
}

render(){
const {title, publisher, publishedDate, description}=this.checkData(this.props)
const authors= this.props.authors? this.props.authors.toString():"No Data"
const thumbnail = this.checkImg(this.props.thumbnail)


return(
   <div>
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

