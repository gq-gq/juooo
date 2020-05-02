import React from 'react';
import {
  NavLink
} from 'react-router-dom'
import router from './router'
import MyRouter from './components/common/Router' 
import './App.css';

function App() {
  return (
    <div className="App">
     
      <MyRouter router={router}></MyRouter>
    </div>
  );
}

export default App;
