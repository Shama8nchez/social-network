import React from "react";
import Profile from "./Profile";
import withRouter from "../../utils/withRouter";
import { connect } from "react-redux";
import { getUser } from "../../redux/usersReducer";
import { getProfileStatus } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID;
    userID = this.props.router.params.userID ? this.props.router.params.userID : 29784
    this.props.getUser(userID)
    this.props.getProfileStatus(userID)
  }

  render() {
    return (
      <Profile {...this.props } user={this.props.user} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersDB.user,
  }
}

const ProfileContainerWithRoute = withRouter(ProfileContainer)

const FullProfileContainer = connect(mapStateToProps, {getUser, getProfileStatus})(ProfileContainerWithRoute)

export default FullProfileContainer;