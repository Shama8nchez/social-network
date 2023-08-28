import classes from '../../Profile.module.css';
import github from '../../../../assets/github.svg';
import vk from '../../../../assets/vk.svg';
import facebook from '../../../../assets/facebook.svg';
import instagram from '../../../../assets/instagram.svg';
import twitter from '../../../../assets/twitter.svg';
import youtube from '../../../../assets/youtube.svg';
import mainLink from '../../../../assets/main.svg';
import website from '../../../../assets/website.svg';

const icons = {
  github: github,
  vk: vk,
  facebook: facebook,
  instagram: instagram,
  twitter: twitter,
  youtube: youtube,
  mainLink: mainLink,
  website: website,
}

const Contacts = (props) => {
  return (
      <div>
        <div className={classes.contacts}><b>Contacts</b></div>
        {(Object.keys(props.user.contacts)).map((item) => (
          props.user.contacts[item] &&
          <div className={classes.icon} key={'div' + item}>
            <a href={props.user.contacts[item]}><img src={icons[item]} alt={item} className={classes.icon} /></a>
          </div>
        ))}
      </div>
  )
}

export default Contacts;