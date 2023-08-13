import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
