import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import unknown from '../../assets/unknown.png'
import Loader from '../Loader/Loader';
import StatusContainer from './Status/StatusContainer';

const Profile = (props) => {
  return (
    props.user ?
      <div className={classes.profile}>
        <h2>{props.user.fullName}</h2>
        <div className={classes.profileInfo}>
          <img src={props.user.photos.large ? props.user.photos.large : unknown} alt="user_photo" className={classes.profilePhoto} />
          <StatusContainer />
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;