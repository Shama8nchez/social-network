//import classes from './Dialog.module.css';

const Dialog = (props) => {

  return (
    <div>
      {props.messages.map(message => (<div key={message.id}>{message.message}</div>))}
      {/* <div>Hello!</div>
      <div>How are you?</div>
      <div>Have fun!</div> */}
      <textarea></textarea>
      <br />
      <button>Send message</button>
    </div>
  )
}

export default Dialog;