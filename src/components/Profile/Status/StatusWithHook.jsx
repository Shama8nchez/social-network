import React, { useState } from "react";
import classes from './Status.module.css'

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState(props.profileStatus)

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const changeStatus = (e) => {
    setProfileStatus(e.currentTarget.value)
  }

  const sendProfileStatus = () => {
    props.sendProfileStatus(profileStatus)
  }

  return (
    <div>
      <p className={classes.statusTitle}>Status:</p>
      { editMode ?
      <div onBlur={toggleEditMode} >
        <input type="text" autoFocus className={classes.status} value={profileStatus} onChange={changeStatus} onBlur={sendProfileStatus}/>
      </div> :
      <p className={classes.status} onClick={toggleEditMode}>{profileStatus}</p>}
    </div>
    )

}

export default Status;