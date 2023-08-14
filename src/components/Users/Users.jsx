import React from "react";
import User from "./User/User";
import axios from 'axios';
import classes from './Users.module.css'

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1')
      .then(response => this.props.setUsers(response.data.items))
    }
  }

  handleClick(page) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
    .then(response => this.props.setUsers(response.data.items));
    this.props.setPage(page);
  }

  render() {
    let pages = [];
    for (let page = 1; page <= this.props.totalPages; page++ ) {
      pages.push(page)
    }

    return (
      <div>
        <div>
          {pages.map(page => <span
            className={ page === this.props.currentPage ? `${classes.page} ${classes.currentPage}` : classes.page }
            key={page} 
            onClick={() => this.handleClick(page)}
          >{page}</span>)}
        </div>
        {this.props.users.map((user) => (
          <User user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} key={user.id} /> 
        ))}
      </div>
    )
  }
}

export default Users;