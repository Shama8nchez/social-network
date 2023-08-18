import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const DialogsContainer = (props) => {
  if (!props.isLogin) return <Navigate to="/login" />
  return <Dialogs />
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  }
}

export default connect(mapStateToProps, {})(DialogsContainer)