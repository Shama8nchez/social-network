import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to='/'
        className={({ isActive }) =>
        isActive ? `${classes.navbarLink} ${classes.activeLink}` : classes.navbarLink
      }
      >Profile</NavLink>
      <NavLink
        to='/dialogs' className={({ isActive }) =>
        isActive ? `${classes.navbarLink} ${classes.activeLink}` : classes.navbarLink
      }
      >Dialogs</NavLink>
    </div>
  )
}

export default Navbar;