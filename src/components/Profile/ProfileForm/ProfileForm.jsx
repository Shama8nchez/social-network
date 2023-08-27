import { Formik, Field, Form } from 'formik';
import classes from './ProfileForm.module.css';
import { connect } from 'react-redux';
import { updateProfile } from '../../../redux/usersReducer'
import ProfileFormInput from './ProfileFormInput/ProfileFormInput';

const ProfileForm = (props) => {
  
  return (
    <Formik
      initialValues={{
        fullName: props.user.fullName  || '',
        lookingForAJob: props.user.lookingForAJob,
        lookingForAJobDescription: props.user.lookingForAJobDescription || '',
        github: props.user.contacts.github || '',
        vk: props.user.contacts.vk || '',
        facebook: props.user.contacts.facebook || '',
        instagram: props.user.contacts.instagram || '',
        twitter: props.user.contacts.twitter || '',
        website: props.user.contacts.website || '',
        youtube: props.user.contacts.youtube || '',
        mainLink: props.user.contacts.mainLink || '',
      }}
      
      onSubmit={(values) => {
        props.updateProfile(props.user.userId,
          values.fullName,
          values.lookingForAJob,
          values.lookingForAJobDescription,
          values.github,
          values.vk,
          values.facebook,
          values.instagram,
          values.twitter,
          values.website,
          values.youtube,
          values.mainLink);
        props.changeEditMode();
      }}
    >
      {({ values, handleChange }) => (
        <Form className={classes.form}>

          <div>
            <h3>Job information</h3>
            <ProfileFormInput contact="fullName" handleChange={handleChange} values={values} />

            <div className={classes.inputContainer} >
              <label htmlFor="lookingForAJob" className={classes.label}>Looking for a job:</label>
              <Field id="lookingForAJob" name="lookingForAJob" type="checkbox" className={classes.checkbox} />
            </div>

            <div className={classes.inputContainer} >
              <div>
                <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder="Looking For A Job Description"
                  onChange={handleChange} value={values.lookingForAJobDescription} className={`${classes.input} ${classes.inputArea}`} /> 
              </div>
            </div>
          </div>
          
          <div>
            <h3>Contacts</h3>
            {(Object.keys(props.user.contacts)).map((item) => 
              <ProfileFormInput contact={item} handleChange={handleChange} values={values} key={item} />
            )}
          </div>
          
          <div className={classes.buttonContainer}>
            <button type="submit" className={classes.button}>Update</button>
          </div> 
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

export default connect(mapStateToProps, {updateProfile})(ProfileForm);