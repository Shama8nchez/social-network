import React from "react";
import User from "./User/User";
import axios from 'axios';
import UsersNav from "./UsersNav/UsersNav";
import Loader from "../Loader/Loader";

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loading(true);
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1', {
        withCredentials: true,
        headers: {
          "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
        }
      })
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.loading(false);
        })
    }
  }

  handleClick = (page) => {
    this.props.loading(true);
    this.props.setPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
      }
    })
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.loading(false);
      });
  }

  followUser = (userId) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) this.props.followUser(userId);
      });
  }

  unfollowUser = (userId) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "4c385d0e-6b1a-4344-a538-9d3567a56f3c",
      }
    })
      .then(response => {
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