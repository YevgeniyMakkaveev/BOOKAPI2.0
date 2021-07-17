import React from 'react';
import './App.css';

import Panel from '../Panel'
import reducer from '../../service/reduser';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import BookCard from '../Results/result'
import ModalWind from '../Modal';

const store = createStore(reducer)
console.log(store.getState())


const App=()=> {
  return (
    <div className="App">
    <Provider store={store}>
      <Panel/>
     <BookCard/>
    <ModalWind/>
     </Provider>
    </div>
  );
}

export default App;
