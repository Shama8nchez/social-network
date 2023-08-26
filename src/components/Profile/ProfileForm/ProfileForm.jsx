import { Formik, Field, Form } from 'formik';
import classes from './ProfileForm.module.css';
import { connect } from 'react-redux';

const ProfileForm = (props) => {
  
  return (
    <Formik
      initialValues={{
        lookingForAJob: props.user.lookingForAJob,
        lookingForAJobDescription: props.user.lookingForAJobDescription || '',
        github: props.user.github || '',
        vk: props.user.vk || '',
        facebook: props.user.facebook || '',
        instagram: props.user.instagram || '',
        twitter: props.user.twitter || '',
        website: props.user.website || '',
        youtube: props.user.youtube || '',
        mainLink: props.user.mainLink || '',
      }}
      
      onSubmit={(values) => {
        //props.updateProfile(values.Login, values.Password, values.RememeberMe)
        console.log(values.lookingForAJob,
          values.lookingForAJobDescription,
          values.github,
          values.vk,
          values.facebook,
          values.instagram,
          values.twitter,
          values.website,
          values.youtube,
          values.mainLink)
      }}
    >
      {({ values, handleChange }) => (
        <Form className={classes.form}>
          <div className={classes.inputContainer} >
            <label htmlFor="lookingForAJob" className={classes.label}>Looking for a job:</label>
            <Field id="lookingForAJob" name="lookingForAJob" type="checkbox" className={classes.checkbox} />
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder="lookingForAJobDescription" onChange={handleChange} value={values.lookingForAJobDescription} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="github" name="github" placeholder="github" onChange={handleChange} value={values.github} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="vk" name="vk" placeholder="vk" onChange={handleChange} value={values.vk} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="facebook" name="facebook" placeholder="facebook" onChange={handleChange} value={values.facebook} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="instagram" name="instagram" placeholder="instagram" onChange={handleChange} value={values.instagram} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="twitter" name="twitter" placeholder="twitter" onChange={handleChange} value={values.twitter} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="website" name="website" placeholder="website" onChange={handleChange} value={values.website} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="youtube" name="youtube" placeholder="youtube" onChange={handleChange} value={values.youtube} className={classes.input} /> 
            </div>
          </div>

          <div className={classes.inputContainer} >
            <div>
              <Field id="mainLink" name="mainLink" placeholder="mainLink" onChange={handleChange} value={values.mainLink} className={classes.input} /> 
            </div>
          </div>

          <button type="submit" className={classes.button}>Updatae</button>
        </Form>
      )}
      
    </Formik>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.usersDB.user
  }
}

export default connect(mapStateToProps, {})(ProfileForm);