import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogsList dialogs={props.dialogs} />
      <Dialog messages={props.messages} />
    </div>
  )
}

export default Dialogs;