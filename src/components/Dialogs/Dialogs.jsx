import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogsList />
    </div>
  )
}

export default Dialogs;