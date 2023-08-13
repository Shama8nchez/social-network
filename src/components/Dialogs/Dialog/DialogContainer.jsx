import { sendMessageAC, typeMessageAC } from "../../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsDB.messages,
    newMessage: state.dialogsDB.newMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(sendMessageAC()),
    typeMessage: (newText) => dispatch(typeMessageAC(newText))
  }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;