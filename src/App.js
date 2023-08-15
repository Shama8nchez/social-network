import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<ProfileContainer />} />
            <Route path='/:userID' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
