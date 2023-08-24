import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, followUser, unfollowUser, setCurrentPagesBlockAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersDB.users,
    totalPages: state.usersDB.totalPages,
    currentPage: state.usersDB.currentPage,
    isLoading: state.usersDB.isLoading,
    followingProgress: state.usersDB.followingProgress,
    currentPagesBlock: state.usersDB.currentPagesBlock,
  }
}

const UsersContainer = connect(mapStateToProps, {getUsers, followUser, unfollowUser, setCurrentPagesBlockAC})(Users);

export default UsersContainer;