import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import withRouter from './utils/withRouter';
import { connect } from 'react-redux';
import { initializingApp } from './redux/appReducer';
import Loader from './components/Loader/Loader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializingApp()
  }

  render() {
    if (!this.props.isInitialized) {
      return <Loader />
    }

    return (
      <div className="App">
        <HeaderContainer />
        <main className='main'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<ProfileContainer />} />
              <Route path='/:userID' element={<ProfileContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
            </Routes>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializingApp})
)(App);
