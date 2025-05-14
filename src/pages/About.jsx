import React from 'react';
import { Helmet } from "react-helmet";
import GetInTouch from "../components/GetInTouch";
import ProfileImage from '../assets/images/camille-gan.jpg';

import styles from '../styles/pages/about.module.scss';

export default function About() {

  const wrapperRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5; // range: -15 to +15
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;

    const image = wrapperRef.current.querySelector(`.${styles.parallaxImage}`);
    image.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    const image = wrapperRef.current.querySelector(`.${styles.parallaxImage}`);
    image.style.transform = 'translate(0, 0)';
  };

  return (
    <>
      <Helmet>
        <title>About the Founder, Camille Gan | OutThere&</title>
        <meta name="description" content="About the founder of OutThere&, Camille Gan." />
      </Helmet>
      <section className={styles.about}>
        <h2 className="text-align-center">About the Founder</h2>

        <div className="container--narrow">
          <div className={styles.intro}>
            <div
              className={styles.parallaxWrapper}
              ref={wrapperRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={styles.parallaxImage}
                style={{ backgroundImage: `url(${ProfileImage})` }}
              />
            </div>
            <h3>Camille Gan</h3>
          </div>
          <p>Meet Camille Gan, an enthusiastic professional with over 10 years of experience in the boutique fitness industry. She enjoys working with small businesses to enhance their operations and build strong, supportive teams.</p>
          <p>Camille focuses on finding the right talent that fits each business's unique culture and goals, helping them grow in a sustainable way. She also loves training staff in sales and customer service, nurturing a positive environment that encourages customer loyalty.</p>
          <p>Beyond staffing, Camille creates clear operational handbooks to help businesses run smoothly. She takes the time to understand the specific needs of each business, whether it's a boutique fitness studio or another small venture, and works collaboratively to identify opportunities for improvement.</p>
          <p>With a genuine commitment to helping others succeed, Camille is a supportive partner in the journey of growth and transformation for every business she works with.</p>
          <GetInTouch className={`button--large ${styles.button}`} />
        </div>
      </section>
    </>
  );
}