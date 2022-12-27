import { IonIcon } from '@ionic/react'
import { logoGithub, logoFacebook, logoInstagram, mailOutline} from 'ionicons/icons'
import './TheFooter.scss'

export default function TheFooter() {
  return (
    <footer className="footer">
      <div className="buttons socials is-flex-row is-justify-content-center">
        <a
          target="_blank"
          href="mailto:srthompson@scu.edu"
          className="social mx-2"
        >
          <IonIcon className="mailOutline icon is-medium" icon={mailOutline} />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/bronco_racing/"
          className="social mx-2"
        >
          <IonIcon
            className="logoInstagram icon is-medium"
            icon={logoInstagram}
          />
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/broncoracing/"
          className="social mx-2"
        >
          <IonIcon
            className="logoFacebook icon is-ionic is-medium"
            icon={logoFacebook}
          />
        </a>

        <a
          target="_blank"
          href="https://github.com/Bronco-Racing"
          className="social mx-2"
        >
          <IonIcon className="logoGithub icon is-medium" icon={logoGithub} />
        </a>
      </div>
    </footer>
  )
}
