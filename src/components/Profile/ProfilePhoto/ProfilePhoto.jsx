import classes from './ProfilePhoto.module.css';
import unknown from '../../../assets/unknown.png'

const ProfilePhoto = (props) => {
  return (
    <div className={classes.profilePic}>
      <label className={props.photo ? classes.label : classes.label + ' ' + classes.profilePhoto} htmlFor="file">
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={(e) => console.log(e.target.files[0])} />
      <img src={props.photo ? props.photo : unknown} alt="user_photo" className={props.photo ? '' : classes.profilePhoto} />
    </div>
    
  )
}

export default ProfilePhoto;