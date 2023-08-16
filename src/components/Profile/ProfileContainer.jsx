import React from "react";
import Profile from "./Profile";
import withRouter from "../../utils/withRouter";
import { connect } from "react-redux";
import { getUserAC } from "../../redux/usersReducer";
import userAPI from "../../API/userAPI";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID;
    userID = this.props.router.params.userID ? this.props.router.params.userID : 29784
    userAPI.getUser(userID)
      .then(response => {
        this.props.getUserAC(response.data)
      })
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

const FullProfileContainer = connect(mapStateToProps, {getUserAC})(ProfileContainerWithRoute)

export default FullProfileContainer;