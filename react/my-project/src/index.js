import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BlogMain from './Components/blog/BlogMain';
import Greeting from './Components/blog/Greeting';
import MyBtn from './Components/MyBtn';
import ToolBar from './Components/ToolBar';


const onClickLoginHandle = (e) => {
  alert('To Login Page...')
}
const onClickLogoutHandle = (e) => {
  alert('Bye')
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToolBar isLogin={true} onClickLoginHandle={onClickLoginHandle} onClickLogoutHandle={onClickLogoutHandle}/>
    <Greeting isLogin={true}/>
    <MyBtn />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
