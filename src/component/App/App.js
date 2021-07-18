import React from 'react';
import './App.css';
import Panel from '../Panel'
import reducer from '../../service/reduser';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import BookCard from '../Results'
import ModalWind from '../Modal';
import ErrorBoundry from '../ErrorBound'

const store = createStore(reducer)



const App=()=> {
  return (
    <div className="App"> 
   <ErrorBoundry>
      <Provider store={store}>
       <Panel/>
       <BookCard/>
       <ModalWind/>
      </Provider>
  </ErrorBoundry>
    </div>
  );
}

export default App;
