import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import Loader from '../Loader/Loader';
import StatusContainer from './Status/StatusContainer';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';
import github from '../../assets/github.svg';
import vk from '../../assets/vk.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import mainLink from '../../assets/main.svg';
import website from '../../assets/website.svg';
import { useState } from 'react';

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  function changeEditMode() {
    setEditMode(!editMode)
  }

  return (
    props.user ?
      <div className={classes.profile}>
        
        <div className={classes.profileInfo}>
          <ProfilePhoto photo={props.user.photos.large} changePhoto={props.changePhoto} />
          <div className={classes.TitleStatus}>
            <h2>{props.user.fullName}</h2>
            <StatusContainer />
            {!editMode ? <>
            <div><b>Job </b> {props.user.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}</div>
            {props.user.lookingForAJob ? 
              <div className={classes.jobDescription}>
                {props.user.lookingForAJobDescription}
              </div> :
              <div></div>
            }
            <div>
              <div className={classes.contacts}><b>Contacts</b></div>
              {props.user.contacts.github ?
                <div className={classes.icon}><a href={props.user.contacts.github}><img src={github} alt='gh' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.vk ?
                <div className={classes.icon}><a href={props.user.contacts.vk}><img src={vk} alt='vk' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.facebook ?
                <div className={classes.icon}><a href={props.user.contacts.facebook}><img src={facebook} alt='facebook' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.instagram ?
                <div className={classes.icon}><a href={props.user.contacts.instagram}><img src={instagram} alt='instagram' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.twitter ?
                <div className={classes.icon}><a href={props.user.contacts.twitter}><img src={twitter} alt='twitter' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.website ?
                <div className={classes.icon}><a href={props.user.contacts.website}><img src={website} alt='website' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.youtube ?
                <div className={classes.icon}><a href={props.user.contacts.youtube}><img src={youtube} alt='youtube' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
              {props.user.contacts.mainLink ?
                <div className={classes.icon}><a href={props.user.contacts.mainLink}><img src={mainLink} alt='mainLink' className={classes.icon} /></a></div> :
                <div className={classes.emptyIcon}></div>
              }
            </div></> :  <ProfileForm props changeEditMode={changeEditMode} /> }
            {props.user.userId === props.id ? <span className={classes.edit} onClick={changeEditMode}>{!editMode ? 'Edit Profile' : 'Cancel'}</span> : <div></div>}
            
          </div>
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;