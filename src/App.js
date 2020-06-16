import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {

  let count = useState(0);

  return (
    <CounterContext.Provider value = {count}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
