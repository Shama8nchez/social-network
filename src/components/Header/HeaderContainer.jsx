import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import axios from 'axios';
import { setAuthUserAC } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
      .then(response => {
        this.props.setAuthUserAC(response.data.data)
      })
  }

  render() {
    return (
      <Header isLogin={this.props.isLogin} login={this.props.login} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isLogin: state.auth.isLogin,
  }
}


export default connect(mapStateToProps, {setAuthUserAC})(HeaderContainer);