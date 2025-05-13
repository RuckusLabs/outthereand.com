import RecruitingIcon from '../assets/icons/icon--recruiting.svg';
import TrainingIcon from '../assets/icons/icon--training.svg';
import ProcessIcon from '../assets/icons/icon--process.svg';
import GetInTouch from "../components/GetInTouch";    

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  
  return (
    <>
      <section className={styles.hero}>
        <h1>Empowering <span className="highlight">boutique businesses</span> through membership-based sales coaching, recruitment, and culture development.</h1>
      </section>
      <section className={styles.services}>
        <h2>Services</h2>
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

      </section>
    </>
  );
}