import DialogsList from "./DialogsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsUsers: state.dialogsDB.dialogsUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList)

export default DialogsListContainer;