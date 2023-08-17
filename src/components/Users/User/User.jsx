import { NavLink } from 'react-router-dom';
import classes from './User.module.css'

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <NavLink to={`/${props.id}`} className={classes.userLink}>
          {props.user.name}
        </NavLink>
        
        <div>
          <div className={classes.userStatus}>Status: {props.user.status}</div>
        </div>
      </div>
      <button className='userButton'
        onClick={props.user.followed ? () => props.unfollowUser(props.user.id) : () => props.followUser(props.user.id)}
        disabled={props.followingProgress.some(id => id === props.user.id)}
      >{props.user.followed ? 'Unfollow' : 'Follow'}</button>
    </div>
  )
}

export default User;