
import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = (props) => {
  const dialogsUsers = props.store.getState().dialogsDB.dialogsUsers
  return (
    <div>
      {dialogsUsers.map(dialog => <DialogsItem key={dialog.id} id={dialog.id} name={dialog.userName} />)}
    </div>
  )
}

export default DialogsList;