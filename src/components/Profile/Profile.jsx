import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import Loader from '../Loader/Loader';
import StatusContainer from './Status/StatusContainer';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

const Profile = (props) => {
  return (
    props.user ?
      <div className={classes.profile}>
        <h2>{props.user.fullName}</h2>
        <div className={classes.profileInfo}>
          <ProfilePhoto photo={props.user.photos.large} changePhoto={props.changePhoto} />
          <StatusContainer />
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;