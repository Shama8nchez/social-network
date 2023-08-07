import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const postsDB = [
  {
    id: 1,
    post: "Hello!",
    likesCount: 78
  },
  {
    id: 2,
    post: "yoyoy!!",
    likesCount: 26
  },
  {
    id: 3,
    post: "aliluya!",
    likesCount: 11
  },
  {
    id: 4,
    post: "Let's go!",
    likesCount: 43
  },
];

const dialogsDB = [
  {
    id: 1,
    userName: 'Andrey'
  },
  {
    id: 2,
    userName: 'Anna'
  },
  {
    id: 3,
    userName: 'Eugeniy'
  },
  {
    id: 4,
    userName: 'Fedor'
  },
  {
    id: 5,
    userName: 'Denis'
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsDB} dialogs={dialogsDB} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
