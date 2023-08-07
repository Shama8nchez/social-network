import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Navbar />
        <div className='content'>
          <Profile />
        </div>
      </main>
    </div>
  );
}

export default App;
