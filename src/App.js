import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Navbar />
        <div className='content'>
          {/* <Profile /> */}
          <Routes>
            <Route path='/' element={<Profile posts={props.posts} newPost={props.newPost} addPost={props.addPost} typePost={props.typePost} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
