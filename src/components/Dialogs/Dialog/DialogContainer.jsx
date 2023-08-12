import React from "react";
import { sendMessageAC, typeMessageAC } from "../../../redux/dialogReducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
  const state = props.store.getState().dialogsDB;
  const addMessage = () => {
    props.store.dispatch(sendMessageAC())
  }

  const typeMessage = (newText) => {
    props.store.dispatch(typeMessageAC(newText))
  }

  return (
    <Dialog addMessage={addMessage} typeMessage={typeMessage} messages={state.messages} newMessage={state.newMessage} />
  )
}

export default DialogContainer;