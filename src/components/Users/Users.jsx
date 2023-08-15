import React from "react";
import User from "./User/User";
import axios from 'axios';
import UsersNav from "./UsersNav/UsersNav";
import Loader from "../Loader/Loader";

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loading(true);
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1')
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.loading(false);
        })
    }
  }

  handleClick = (page) => {
    this.props.loading(true);
    this.props.setPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.loading(false);
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
            (<User user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} key={user.id} />)) :
          <Loader />}
        {/* {this.props.users.map((user) => 
            (<User user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} key={user.id} />))} */}
      </div>
    )
  }
}

export default Users;