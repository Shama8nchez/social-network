import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setPageAC, loadingAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersDB.users,
    totalPages: state.usersDB.totalPages,
    currentPage: state.usersDB.currentPage,
    isLoading: state.usersDB.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => dispatch(followAC(id)),
    unfollowUser: (id) => dispatch(unfollowAC(id)),
    setUsers: (data) => dispatch(setUsersAC(data)),
    setPage: (page) => dispatch(setPageAC(page)),
    loading: (isLoading) => dispatch(loadingAC(isLoading)),
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;