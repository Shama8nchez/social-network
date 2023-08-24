import { Formik, Field, Form } from 'formik';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = (props) => {
  if (props.isLogin) return <Navigate to='/' />

  return (
    <div>
      <h1>Sign In</h1>
      <LoginForm login={props.login} />
    </div>
    
  )
}

const LoginForm = (props) => {
  
  return (
    <Formik
      initialValues={{
        Login: '',
        Password: '',
        RememeberMe: false,
      }}
      validate={values => {
        const errors = {};

        if (!values.Login && !values.Password) {
          errors.Login = 'Field is empty';
          errors.Password = 'Field is empty';
        } else if (!values.Password) {
          errors.Password = 'Field is empty';
        } else if (!values.Login) {
          errors.Login = 'Field is empty';
        }

        return errors;
      }}
      onSubmit={(values) => {
        props.login(values.Login, values.Password, values.RememeberMe)
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form className={classes.form}>
          <div className={classes.inputContainer} >
            <label htmlFor="Login" className={classes.label}>Login</label>
            <div>
              <Field id="Login" name="Login" placeholder="Login" onChange={handleChange} value={values.Login} className={classes.input} /> 
            </div>
            <div className={classes.errors}>
              {errors.Login && touched.Login && errors.Login}
            </div>
          </div>

          <div className={classes.inputContainer} >
            <label htmlFor="Password" className={classes.label}>Password</label>
            <div>
              <Field id="Password" name="Password" placeholder="Password" type="password" onChange={handleChange} value={values.Password}  className={classes.input} />
            </div>
            <div className={classes.errors}>
              {errors.Password && touched.Password && errors.Password}
            </div>
          </div>

          <div className={classes.inputContainer} >
            <label htmlFor="RememeberMe" className={classes.label}>Remember me</label>
            <Field id="RememeberMe" name="RememeberMe" type="checkbox" className={classes.checkbox} />
          </div>

          <button type="submit" className={classes.button}>SIGN IN</button>
        </Form>
      )}
      
    </Formik>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
}

export default connect(mapStateToProps, {login})(Login)