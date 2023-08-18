import DialogsList from "./DialogsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsUsers: state.dialogsDB.dialogsUsers,
  }
}

const DialogsListContainer = connect(mapStateToProps, {})(DialogsList)

export default DialogsListContainer;