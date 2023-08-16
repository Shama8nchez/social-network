import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.login}>
        {props.isLogin ? props.login : 'LOGIN'}
      </div>
    </header>
  )
}

export default Header;