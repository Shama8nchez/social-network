/* import PostsContainer from './Posts/PostsContainer'; */
/* import classes from './Profile.module.css'; */
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersDB.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => dispatch(followAC(id)),
    unfollowUser: (id) => dispatch(unfollowAC(id)),
    setUsers: (data) => dispatch(setUsersAC(data)),
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;