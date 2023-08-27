import React from "react";
import Status from "./StatusWithHook";
import { sendProfileStatus } from "../../../redux/profileReducer";
import { connect } from "react-redux";

class StatusContainer extends React.Component {
  render() {
    return (
      <Status profileStatus={this.props.profileStatus} sendProfileStatus={this.props.sendProfileStatus} id={this.props.id} user={this.props.user} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileStatus: state.postsDB.profileStatus,
    user: state.usersDB.user,
    id: state.auth.id,
  }
}

export default connect(mapStateToProps, { sendProfileStatus })(StatusContainer);