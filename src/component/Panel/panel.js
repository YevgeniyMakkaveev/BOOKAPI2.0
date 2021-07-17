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
 const {tearm, field, priority}=this.state
 this.props.getTearm(tearm,field,priority)
 this.setState({
    tearm: ''
 })
 }

 render(){
  const { tearm } = this.state;
return (
 <div>
 <form className="input-group  searchPannel" onSubmit={this.onSearchStart}>
 <input className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.onInput} value={tearm}/>
 <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search </button>
 </form>
<div className="input-group">
 <select className="form-select" onChange={this.onFieldChange}>
<option value="all">all </option>
<option value="art">art</option>
<option value="biography">biography</option>
<option value="computers">computers</option>
<option value="history">history</option>
<option value="medical">medical</option>
<option value="poetry">poetry</option>
 </select>
<select className="form-select" onChange={this.onPriorityChange}>
<option value="relevance">relevance  </option>
<option value="newest">newest</option>
</select>
</div>
<button onClick={()=>{console.log(this.state)}}> state</button>
 </div>
)
}
}
const mapDispatchToProps =(dispatch) =>{
  const {getTearm} = bindActionCreators(actions, dispatch)
  return{
    getTearm: (tearm, field, priority) => {
      
       getTearm(tearm, field, priority)
       }
  }
  }
export default connect(null, mapDispatchToProps)(Panel)
