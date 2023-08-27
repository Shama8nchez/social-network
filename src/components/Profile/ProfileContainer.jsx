import React from "react";
import Profile from "./Profile";
import withRouter from "../../utils/withRouter";
import { connect } from "react-redux";
import { getUser, changePhoto } from "../../redux/usersReducer";
import { getProfileStatus } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID;
    userID = this.props.router.params.userID ? this.props.router.params.userID : this.props.id
    if (userID) {
      this.props.getUser(userID)
      this.props.getProfileStatus(userID)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userID !== prevProps.router.params.userID) {
      let userID;
      userID = this.props.router.params.userID ? this.props.router.params.userID : this.props.id
      if (userID) {
        this.props.getUser(userID)
        this.props.getProfileStatus(userID)
      }
    }
  }

  render() {
    if (!this.props.isLogin && !this.props.router.params.userID) return <Navigate to="/login" />
    return (
      <Profile {...this.props } user={this.props.user} id={this.props.id} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersDB.user,
    id: state.auth.id,
    isLogin: state.auth.isLogin,
  }
}

const ProfileContainerWithRoute = withRouter(ProfileContainer)

const FullProfileContainer = connect(mapStateToProps, {getUser, getProfileStatus, changePhoto})(ProfileContainerWithRoute)

export default FullProfileContainer;