import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import Loader from '../Loader/Loader';
import StatusContainer from './Status/StatusContainer';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';

const Profile = (props) => {
  return (
    props.user ?
      <div className={classes.profile}>
        
        <div className={classes.profileInfo}>
          <ProfilePhoto photo={props.user.photos.large} changePhoto={props.changePhoto} />
          <div className={classes.TitleStatus}>
            <h2>{props.user.fullName}</h2>
            <StatusContainer />
            {props.user.lookingForAJob ? 
              <div>
                {props.user.lookingForAJobDescription}
              </div> :
              <div></div>
            }
            <div>
              <div>Contacts:</div>
              <div>{props.user.github}</div>
              <div>{props.user.vk}</div>
              <div>{props.user.facebook}</div>
              <div>{props.user.instagram}</div>
              <div>{props.user.twitter}</div>
              <div>{props.user.website}</div>
              <div>{props.user.youtube}</div>
              <div>{props.user.mainLink}</div>
            </div>
            <ProfileForm />
          </div>
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;