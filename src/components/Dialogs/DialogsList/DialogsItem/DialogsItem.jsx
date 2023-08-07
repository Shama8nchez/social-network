import classes from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  return (
      <NavLink
        to={`/dialogs/${props.id}`}
        className={({ isActive }) =>
        isActive ? `${classes.link} ${classes.activeLink}` : classes.link
      }
      >{props.name}</NavLink>

  )
}

export default DialogsItem;