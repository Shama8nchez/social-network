import { NavLink } from 'react-router-dom';
import classes from './User.module.css'
import unknown from '../../../assets/unknown.png'

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        
        <NavLink to={`/profile/${props.id}`} className={classes.userLink}>
          {props.user.name}
          <br />
          <img src={props.user.photos.small ? props.user.photos.small : unknown} alt='user' className={classes.avatar} />
        </NavLink>
        
        <div>
          <div className={classes.userStatus}>Status: {props.user.status}</div>
        </div>
      </div>
      <button className={classes.userButton}
        onClick={props.user.followed ? () => props.unfollowUser(props.user.id) : () => props.followUser(props.user.id)}
        disabled={props.followingProgress.some(id => id === props.user.id)}
      >{props.user.followed ? 'Unfollow' : 'Follow'}</button>
    </div>
  )
}

export default User;