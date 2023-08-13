/* import PostsContainer from './Posts/PostsContainer'; */
/* import classes from './Profile.module.css'; */
import User from "./User/User";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <User user={user} followUser={props.followUser} unfollowUser={props.unfollowUser} key={user.id} /> 
      ))}
    </div>
  )
}

export default Users;