import React from "react";
import User from "./User/User";

class Users extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <User user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} key={user.id} /> 
        ))}
      </div>
    )
  }
}

export default Users;