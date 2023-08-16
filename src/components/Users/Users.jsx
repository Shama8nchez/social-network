import React from "react";
import User from "./User/User";
import userAPI from "../../API/userAPI";
import UsersNav from "./UsersNav/UsersNav";
import Loader from "../Loader/Loader";

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      userAPI.getUsers().then(response => {
          this.props.setUsers(response.data.items);
          this.props.loading(false);
        })
    }
  }

  handleClick = (page) => {
    this.props.loading(true);
    this.props.setPage(page);
    userAPI.getUsers(page).then(response => {
        this.props.setUsers(response.data.items);
        this.props.loading(false);
      });
  }

  followUser = (userId) => {
    userAPI.followUser(userId).then(response => {
        if (response.data.resultCode === 0) this.props.followUser(userId);
      });
  }

  unfollowUser = (userId) => {
    userAPI.unfollowUser(userId).then(response => {
        if (response.data.resultCode === 0) this.props.unfollowUser(userId);
      });
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
            (<User user={user} followUser={this.followUser} unfollowUser={this.unfollowUser} key={user.id} id={user.id} />)) :
          <Loader />}
      </div>
    )
  }
}

export default Users;