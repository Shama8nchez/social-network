import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import Loader from '../Loader/Loader';
import StatusContainer from './Status/StatusContainer';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';
import { useState } from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  function changeEditMode() {
    setEditMode(!editMode)
  }

  return (
    props.user && !props.isLoading ?
      <div className={classes.profile}>
        <div className={classes.profileInfo}>
          <ProfilePhoto photo={props.user.photos.large} changePhoto={props.changePhoto} />
          <div className={classes.TitleStatus}>
            <h2>{props.user.fullName}</h2>
            <StatusContainer />
            {!editMode ? <ProfileInfo user={props.user} /> : <ProfileForm props changeEditMode={changeEditMode} /> }
            {props.user.userId === props.id && <span className={classes.edit} onClick={changeEditMode}>{!editMode ? 'Edit Profile' : 'Cancel'}</span>}
          </div>
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;