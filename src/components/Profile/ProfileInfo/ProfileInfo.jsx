import classes from '../Profile.module.css';
import Contacts from './Contacts/Contacts';

const ProfileInfo = (props) => {
  return (
    <>
      <div><b>Job </b> {props.user.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}</div>
      {
        props.user.lookingForAJob && <div className={classes.jobDescription}>
          {props.user.lookingForAJobDescription}
        </div>
      }
      <Contacts user={props.user} />
    </>
  )
}

export default ProfileInfo