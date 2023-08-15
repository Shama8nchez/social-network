import classes from './UsersNav.module.css';

const UsersNav = (props) => {
  return (
    <div>
      {props.pages.map(page => <span
        className={ page === props.currentPage ? `${classes.page} ${classes.currentPage}` : classes.page }
        key={page} 
        onClick={(e) => props.handleClick(page)}
      >{page}</span>)}
    </div>
  )
}

export default UsersNav;