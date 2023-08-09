import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App posts={store.state.postsDB.posts} newPost={store.state.postsDB.newPost} dialogs={store.state.dialogsDB}
          /* addPost={store.addPost.bind(store)} typePost={store.typePost.bind(store)}
          addMessage={store.addMessage.bind(store)} typeMessage={store.typeMessage.bind(store)} */
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
