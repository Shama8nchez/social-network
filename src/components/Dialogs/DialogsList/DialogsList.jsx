import DialogsItem from './DialogsItem/DialogsItem';

const DialogsList = (props) => {
  return (
    <div>
      {props.dialogsUsers.map(dialog => <DialogsItem key={dialog.id} id={dialog.id} name={dialog.userName} />)}
    </div>
  )
}

export default DialogsList;