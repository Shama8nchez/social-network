import classes from './Dialogs.module.css';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import DialogContainer from './Dialog/DialogContainer';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <DialogsListContainer />
      <DialogContainer />
    </div>
  )
}

export default Dialogs;