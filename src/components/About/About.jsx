import classes from './About.module.css'

const About = () => {
  return (
    <div>
      <h1>
        About this application
      </h1>
      <div>
        <p>This application was created using a <a href="https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&pp=iAQB" className={classes.aboutLink}>
            free course
          </a>
          , and <a href="https://social-network.samuraijs.com/" className={classes.aboutLink}>
            server API.
          </a>
        </p>
      </div>
    </div>
  )
}

export default About;