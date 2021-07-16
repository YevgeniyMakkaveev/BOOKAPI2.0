import React from 'react';
import './App.css';
import Header from '../Header'
import Pannel from '../Pannel'
import Card from '../Results/Card';
import reducer from '../../service/reduser'
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import BookCard from '../Results/result'


const store = createStore(reducer)


const App=()=> {
  return (
    <div className="App">
    <Provider store={store}>
    <Header/>
    <Pannel/>
    <button onClick={()=>{console.log(store.getState())}}> State</button>
    <BookCard/>
    <Card/>

    </Provider>
    </div>
  );
}

export default App;
