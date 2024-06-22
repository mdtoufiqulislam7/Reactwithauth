import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navber from './components/navbar'
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './state/stateProvider';
import { initialstate, reducer } from './state/reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider reducer={reducer} initialstate={initialstate}>
    <Navber />
  </StateProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
