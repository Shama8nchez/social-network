import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUser } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUser()
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


export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);