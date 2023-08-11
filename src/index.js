import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App posts={store.getState().postsDB.posts} newPost={store.getState().postsDB.newPost} dialogs={store.getState().dialogsDB}
          dispatch={store.dispatch.bind(store)} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

reRender()

store.subscribe(reRender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
