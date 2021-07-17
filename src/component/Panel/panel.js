import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../service/actions'
import {
  bindActionCreators
} from 'redux';
import './panel.css'

 class Panel extends Component {
  constructor(props){
   super(props)
   this.state={
  tearm: '',
  field: "all",
  priority: "relevance"
   }
  }



onFieldChange=(e)=>{
 this.setState({
  field: e.target.value
 })}
 onPriorityChange=(e)=>{
  this.setState({
   priority: e.target.value
  })
 }

onInput=(e)=>{
    e.preventDefault();
    const tearm = e.target.value;
    this.setState({tearm});
}

onSearchStart=(e)=>{
 e.preventDefault()
  this.props.clearTearm()
 const {tearm, field, priority}=this.state
 this.props.getTearm(tearm.toLowerCase(),field,priority)
 this.setState({
    tearm: ''
 })
 }

 render(){
  const { tearm } = this.state;
return (
 <div className="component-body">
   <div className="container">
    <div className="row justify-content-center align-items-center">
      <h1 className="title text-center" > КНИЖКА API-ШКА 2.0</h1>
 <form className="searchPannel" onSubmit={this.onSearchStart}>
 <input className="pannel-colour form-control-sm ml-3 w-75" placeholder="Начните поиск" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.onInput} value={tearm}/>
 <button className="btn btn-warning" type="button" id="button-addon2">Search </button>
 </form>
 </div>
 </div>
<div className="input-group">
  <div class="container">
    <div class="row justify-content-center align-items-center">
 <select className="form-select pannel-colour" onChange={this.onFieldChange}>
<option value="all">all </option>
<option value="art">art</option>
<option value="biography">biography</option>
<option value="computers">computers</option>
<option value="history">history</option>
<option value="medical">medical</option>
<option value="poetry">poetry</option>
 </select>
<select className="form-select pannel-colour" onChange={this.onPriorityChange}>
<option value="relevance">relevance  </option>
<option value="newest">newest</option>
</select>
</div>
</div>
 </div>
 </div>
)
}
}
const mapDispatchToProps =(dispatch) =>{
  const {clearTearm, getTearm} = bindActionCreators(actions, dispatch)
  return{
    clearTearm,
    getTearm: (tearm, field, priority) => {
      
       getTearm(tearm, field, priority)
       }
  }
  }
export default connect(null, mapDispatchToProps)(Panel)
