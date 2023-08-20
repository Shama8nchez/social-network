import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.login}>
        {props.isLogin ? <span>{props.login} <span className={classes.logout} onClick={props.logout}>(LOGOUT)</span></span> : <NavLink to={'/login'} className={classes.link}>LOGIN</NavLink>}
      </div>
    </header>
  )
}

export default Header;