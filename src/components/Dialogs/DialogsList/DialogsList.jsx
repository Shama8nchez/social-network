import classes from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = () => {
  return (
    <div className={classes.dialogsList}>
      <DialogsItem id='1' name='Andrey' />
      <DialogsItem id='2' name='Anna' />
      <DialogsItem id='3' name='Eugeniy' />
      <DialogsItem id='4' name='Fedor' />
      <DialogsItem id='5' name='Denis' />
    </div>
  )
}

export default DialogsList;