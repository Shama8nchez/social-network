import classes from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = (props) => {
  return (
    <div className={classes.dialogsList}>
      {props.dialogs.map(dialog => <DialogsItem key={dialog.id} id={dialog.id} name={dialog.userName} />)}
    </div>
  )
}

export default DialogsList;