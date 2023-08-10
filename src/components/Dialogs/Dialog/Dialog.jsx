//import classes from './Dialog.module.css';

import React from "react";
import { sendMessageAC, typeMessageAC } from "../../../redux/reducer";

const Dialog = (props) => {
  const refTextArea = React.createRef();

  const addMessage = () => {
    props.dispatch(sendMessageAC())
  }

  const typeMessage = () => {
    let newText = refTextArea.current.value;
    props.dispatch(typeMessageAC(newText))
  }

  return (
    <div>
      {props.messages.map(message => (<div key={message.id}>{message.message}</div>))}
      <textarea ref={refTextArea} value={props.newMessage} onChange={typeMessage}></textarea>
      <br />
      <button onClick={addMessage}>Send message</button>
    </div>
  )
}

export default Dialog;