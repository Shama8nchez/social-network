import React from "react";
import classes from './Status.module.css'

//Use StatusWithHook

class Status extends React.Component {
  state = {
    editMode: false,
    profileStatus: this.props.profileStatus
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  changeStatus = (e) => {
    this.setState({
      profileStatus: e.currentTarget.value
    })
  }

  sendProfileStatus = () => {
    this.props.sendProfileStatus(this.state.profileStatus)
  }

  render() {
    return (
      <div>
        { this.state.editMode ?
        <div onBlur={this.toggleEditMode} >
          <input type="text" autoFocus className={classes.status} value={this.state.profileStatus} onChange={this.changeStatus} onBlur={this.sendProfileStatus}/>
        </div> :
        <p className={classes.status} onClick={this.toggleEditMode}>{this.state.profileStatus}</p>}
      </div>
    )
  }
}

export default Status;