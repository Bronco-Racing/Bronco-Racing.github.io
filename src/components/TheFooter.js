import { IonIcon } from "@ionic/react";
import { logoGithub, logoFacebook, mail, logoInstagram } from "ionicons/icons";

export default function TheFooter() {
  return (
    <footer className="footer">
      <span>SCU Copyright and things?</span>

      <div className="buttons socials">
        <a
          target="_blank"
          href="https://github.com/Bronco-Racing"
          className="social"
        >
          <IonIcon className="logoGithub icon is-medium" icon={logoGithub} />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/bronco_racing/"
          className="social instagram"
        >
          <IonIcon
            className="logoInstagram icon is-medium"
            icon={logoInstagram}
          />
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/broncoracing/"
          className="social"
        >
          <IonIcon
            className="logoFacebook icon is-ionic is-medium"
            icon={logoFacebook}
          />
        </a>
      </div>
    </footer>
  );
}
