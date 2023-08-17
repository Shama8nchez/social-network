import React from "react";
import User from "./User/User";
import UsersNav from "./UsersNav/UsersNav";
import Loader from "../Loader/Loader";

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers()
    }
  }

  handleClick = (page) => {
    this.props.getUsers(page)
  }

  followUser = (userId) => {
    this.props.followUser(userId)
  }

  unfollowUser = (userId) => {
    this.props.unfollowUser(userId)
  }

  render() {
    let pages = [];
    for (let page = 1; page <= this.props.totalPages; page++ ) {
      pages.push(page)
    }

    return (
      <div>
        <UsersNav pages={pages} handleClick={this.handleClick} currentPage={this.props.currentPage} />
        {!this.props.isLoading ?
          this.props.users.map((user) => 
            (<User user={user} followUser={this.followUser} unfollowUser={this.unfollowUser} followingProgress={this.props.followingProgress} key={user.id} id={user.id} />)) :
          <Loader />}
      </div>
    )
  }
}

export default Users;