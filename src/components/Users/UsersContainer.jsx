import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, followUser, unfollowUser } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersDB.users,
    totalPages: state.usersDB.totalPages,
    currentPage: state.usersDB.currentPage,
    isLoading: state.usersDB.isLoading,
    followingProgress: state.usersDB.followingProgress,
  }
}

const UsersContainer = connect(mapStateToProps, {getUsers, followUser, unfollowUser})(Users);

export default UsersContainer;