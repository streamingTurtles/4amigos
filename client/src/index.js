import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';



// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import './index.css';
import App from './App';
// removed, don't know why this is needed
// import reportWebVitals from './reportWebVitals';


ReactDOM.render( 
    
    <App />, 
    document.getElementById('root') 
    );








// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
