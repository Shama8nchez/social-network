import React from "react";
import User from "./User/User";
import axios from 'axios';

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => this.props.setUsers(response.data.items))
    }
  }

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