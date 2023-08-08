import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, subscribe, typePost, typeMessage, addMessage } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App posts={state.postsDB.posts} newPost={state.postsDB.newPost} dialogs={state.dialogsDB}
          addPost={addPost} typePost={typePost}
          addMessage={addMessage} typeMessage={typeMessage} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

reRender()

subscribe(reRender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
