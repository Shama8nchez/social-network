import classes from './User.module.css'

const User = (props) => {

  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <div className={classes.userName}>{props.user.name}</div>
        <div>
          <div className={classes.userStatus}>Status: {props.user.status}</div>
        </div>
      </div>
      <button className='userButton' onClick={props.user.followed ? () => props.unfollowUser(props.user.id) : () => props.followUser(props.user.id)}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
    </div>
  )
}

export default User;