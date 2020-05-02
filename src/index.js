import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/reset.css'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
axios.interceptors.request.use(config=>{
  config.url = '/juooo' + config.url +'?t=' + Date.now()
  console.log(config)
  return config;
})
axios.interceptors.response.use(data=>{
  console.log(data)
  return  data
})
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
