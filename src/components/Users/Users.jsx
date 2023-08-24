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

  changePagesBlock = (block) => {
    this.props.setCurrentPagesBlockAC(block)
  }

  render() {
    let pages = [];
    let firstPage = 10 * (this.props.currentPagesBlock - 1) + 1 === 1 ? 2 : 10 * (this.props.currentPagesBlock - 1) + 1;
    let lastPage = 10 * (this.props.currentPagesBlock - 1) + 10 > this.props.totalPages - 1 ? this.props.totalPages : 10 * (this.props.currentPagesBlock - 1) + 10;

    for (let page = firstPage; page <= lastPage; page++ ) {
      pages.push(page)
    }

    return (
      <div>
        <UsersNav pages={pages} handleClick={this.handleClick} currentPage={this.props.currentPage}
        totalPages={this.props.totalPages} currentPagesBlock={this.props.currentPagesBlock} changePagesBlock={this.changePagesBlock} />
        {!this.props.isLoading ?
          this.props.users.map((user) => 
            (<User user={user} followUser={this.followUser} unfollowUser={this.unfollowUser} followingProgress={this.props.followingProgress} key={user.id} id={user.id} />)) :
          <Loader />}
      </div>
    )
  }
}

export default Users;