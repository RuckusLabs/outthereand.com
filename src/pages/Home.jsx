import { Helmet } from "react-helmet";
import RecruitingIcon from '../assets/icons/icon--recruiting.svg';
import TrainingIcon from '../assets/icons/icon--training.svg';
import ProcessIcon from '../assets/icons/icon--process.svg';
import GetInTouch from "../components/GetInTouch";    

// Client logos
import jetSetLogo from '../assets/logos/jet-set-logo.svg';
import reformedPilatesLogo from '../assets/logos/reformed-pilates-logo.png';
import clubPilatesLogo from '../assets/logos/club-pilates-logo.png';
import orangeTheoryFitnessLogo from '../assets/logos/orangetheory-fitness-logo.svg';
import f45Logo from '../assets/logos/f45-logo.svg';
import spengaLogo from '../assets/logos/spenga-logo.svg';
import body20Logo from '../assets/logos/body20-logo.svg';
import rowHouseLogo from '../assets/logos/row-house-logo.svg';
import stretchLabLogo from '../assets/logos/stretch-lab-logo.png';
import swthzLogo from '../assets/logos/swthz-logo.png';
import voMedSpaLogo from '../assets/logos/vo-medspa-logo.svg';
import airLabLogo from '../assets/logos/airlab-logo.png';

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  
  return (
    <>
      <Helmet>
        <title>Boutique Business Empowerment | OutThere&</title>
        <meta name="description" content="OutThere& empowers bouqitue businsses through sales strategy, recruitment, and culture development." />
      </Helmet>

      <section className={styles.hero}>
        <h1>Empowering <span className="highlight">boutique businesses</span> through membership-based sales coaching, recruitment, and culture development.</h1>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <ul>
          <li>
            <img src={RecruitingIcon} alt="Recruiting Icon" />
            <h3>Recruitment</h3>
            <p>Head-hunting top talent to build strong, effective teams.</p>
          </li>
          <li>
            <img src={TrainingIcon} alt="Training Icon" />
            <h3>Membership Sales Training</h3>
            <p>Equipping teams with the skills needed to excel in sales and customer service.</p>
          </li>
          <li>
            <img src={ProcessIcon} alt="Process Icon" />
            <h3>Process Development</h3>
            <p>Helping businesses regroup and optimize operations, especially for those considering an exit.</p>
          </li>
        </ul>

        <GetInTouch className={`button--large ${styles.button}`} />
        <p className={styles.link}>Or email at <a href="mailto:camille@outthereand.com">camille@outthereand.com</a></p>

      </section>

      <section className={styles.clients}>
        <h2>The Client List</h2>
        <div className={styles.clientGrid}>
          <img src={jetSetLogo} alt="Jet Set Logo" />
          <img src={reformedPilatesLogo} alt="Reformed Pilates Logo" />
          <img src={clubPilatesLogo} alt="Club Pilates Logo" />
          <img src={orangeTheoryFitnessLogo} alt="Orange Theory Fitness Logo" />
          <img src={f45Logo} alt="F45 Logo" />
          <img src={spengaLogo} alt="Spenga Logo" />
          <img src={body20Logo} alt="Body20 Logo" />
          <img src={rowHouseLogo} alt="Row House Logo" />
          <img width="133" src={stretchLabLogo} alt="Stretch Lab Logo" />
          <img width="106" src={swthzLogo} alt="SWTHZ Logo" />
          <img src={voMedSpaLogo} alt="VO MedSpa Logo" />
          <img src={airLabLogo} alt="Air Lab Logo" />
        </div>
      </section>

      
      
    </>
  );
}