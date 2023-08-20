import { Formik, Field, Form } from 'formik';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';

const Login = (props) => {
  return (
    <div>
      <h1>Login:</h1>
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

        if (!values.Login) {
          errors.Login = 'Field is empty';
        } else if (!values.Password) {
          errors.Password = 'Field is empty';
        }

        return errors;
      }}
      onSubmit={(values) => {
        props.login(values.Login, values.Password, values.RememeberMe)
      }}
    >
      {({ values, errors, touched, handleChange, handleReset }) => (
        <Form>
          <div>
            <label htmlFor="Login">Login</label>
            <Field id="Login" name="Login" placeholder="Login" onChange={handleChange} value={values.Login} />
            {errors.Login && touched.Login && errors.Login}
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <Field id="Password" name="Password" placeholder="Password" type="password" onChange={handleChange} value={values.Password} />
            {errors.Password && touched.Password && errors.Password}
          </div>

          <div>
            <label htmlFor="RememeberMe">Remember me</label>
            <Field id="RememeberMe" name="RememeberMe" type="checkbox" />
          </div>

          <button type="submit">LOGIN</button>
        </Form>
      )}
      
    </Formik>
  )
}

export default connect(null, {login})(Login)