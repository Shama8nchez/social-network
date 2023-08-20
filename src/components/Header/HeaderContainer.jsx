import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUser, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUser()
  }

  render() {
    return (
      <Header isLogin={this.props.isLogin} login={this.props.login} logout={this.props.logout} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isLogin: state.auth.isLogin,
  }
}


export default connect(mapStateToProps, {setAuthUser, logout})(HeaderContainer);