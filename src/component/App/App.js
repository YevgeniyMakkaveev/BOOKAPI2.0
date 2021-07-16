import React from 'react';
import './App.css';
import Header from '../Header'
import Panel from '../Panel'
import Card from '../Results/Card';
import reducer from '../../service/reduser';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import BookCard from '../Results/result'
import Modal from '../Modal';

const store = createStore(reducer)
console.log(store.getState())


const App=()=> {
  return (
    <div className="App">
    <Provider store={store}>
    <Header/>
    <Panel/>
    <button onClick={()=>{console.log(store.getState())}}> СТОР</button>

    <BookCard/>
    <Modal/>
    

    </Provider>
    </div>
  );
}

export default App;
