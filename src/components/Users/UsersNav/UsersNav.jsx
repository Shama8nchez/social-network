import classes from './UsersNav.module.css';

const UsersNav = (props) => {
  return (
    <div>
      {props.currentPagesBlock > 1 ?
        <span className={ `${classes.page} ${classes.currentPage}` } onClick={(e) => props.changePagesBlock(props.currentPagesBlock - 1)}>&lt;</span> :
        <span></span>
      }

      <span
        className={ props.currentPage === 1 ? `${classes.page} ${classes.currentPage}` : classes.page }
        key={1} 
        onClick={(e) => props.handleClick(1)}
      >1</span>

      {props.currentPagesBlock > 1 ? <span className={ classes.page }>...</span> : <span></span>}

      {props.pages.map(page => <span
        className={ page === props.currentPage ? `${classes.page} ${classes.currentPage}` : classes.page }
        key={page} 
        onClick={(e) => props.handleClick(page)}
      >{page}</span>)}

      {props.currentPagesBlock < props.totalPages ? <span className={ classes.page }>...</span> : <span></span>}

      <span
        className={ props.currentPage === props.totalPages ? `${classes.page} ${classes.currentPage}` : classes.page }
        key={props.totalPages} 
        onClick={(e) => props.handleClick(props.totalPages)}
      >{props.totalPages}</span>

      {props.currentPagesBlock < props.totalPages ?
        <span className={ `${classes.page} ${classes.currentPage}` } onClick={(e) => props.changePagesBlock(props.currentPagesBlock + 1)}>&gt;</span> :
        <span></span>
      }
    </div>
  )
}

export default UsersNav;