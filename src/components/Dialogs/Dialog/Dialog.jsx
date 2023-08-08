//import classes from './Dialog.module.css';

import React from "react";

const Dialog = (props) => {
  const refTextArea = React.createRef();

  const addMessage = () => {
    props.addMessage()
  }

  const typeMessage = () => {
    let newText = refTextArea.current.value;
    props.typeMessage(newText)
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