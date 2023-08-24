import classes from './ProfilePhoto.module.css';
import unknown from '../../../assets/unknown.png'

const ProfilePhoto = (props) => {
  const handleChange = (e) => {
    props.changePhoto(e.target.files[0]);
  }

  return (
    <div className={classes.profilePic}>
      <label className={props.photo ? classes.label : classes.label + ' ' + classes.profilePhoto} htmlFor="file">
        <span>Change Image</span>
      </label>
      <input id="file" type="file" accept="image/jpeg,image/jpg" onChange={handleChange} />
      <img src={props.photo ? props.photo : unknown} alt="user_photo" className={props.photo ? '' : classes.profilePhoto} />
    </div>
    
  )
}

export default ProfilePhoto;