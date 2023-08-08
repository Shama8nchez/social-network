import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogsList dialogsUsers={props.dialogs.dialogsUsers} />
      <Dialog messages={props.dialogs.messages} newMessage={props.dialogs.newMessage} typeMessage={props.typeMessage} addMessage={props.addMessage} />
    </div>
  )
}

export default Dialogs;