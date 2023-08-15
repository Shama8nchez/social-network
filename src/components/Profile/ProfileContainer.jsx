import React from "react";
import Profile from "./Profile";
import axios from 'axios';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { connect } from "react-redux";
import { getUserAC } from "../../redux/usersReducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID;
    userID = this.props.router.params.userID ? this.props.router.params.userID : 29784
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
      .then(response => {
        this.props.getUserAC(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props } user={this.props.user} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.usersDB.user,
  }
}

const ProfileContainerWithRoute = withRouter(ProfileContainer)

const FullProfileContainer = connect(mapStateToProps, {getUserAC})(ProfileContainerWithRoute)

export default FullProfileContainer;