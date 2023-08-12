import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogContainer from './Dialog/DialogContainer';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogsList store={props.store} />
      <DialogContainer store={props.store} />
    </div>
  )
}

export default Dialogs;