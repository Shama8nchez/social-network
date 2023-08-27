import { Field } from 'formik';
import classes from './ProfileFormInput.module.css';

const ProfileFormInput = (props) => {
  return (
    <div className={classes.inputContainer} >
      <div>
        <Field id={props.contact} name={props.contact} placeholder={props.contact} onChange={props.handleChange} value={props.values[props.contact]} className={classes.input} /> 
      </div>
    </div>
  )
}

export default ProfileFormInput;