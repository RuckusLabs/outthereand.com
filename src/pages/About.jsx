import React from 'react';
import { Helmet } from "react-helmet";
import GetInTouch from "../components/GetInTouch";
import ProfileImage from '../assets/images/camille-gan.jpg';

import styles from '../styles/pages/about.module.scss';

export default function About() {

  const wrapperRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // range: -15 to +15
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

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
            <h3>Camille<br /> Gan</h3>
          </div>
          <p>Camille Gan is a seasoned professional with over a decade of experience in the boutique fitness industry and a proven track record of helping small businesses thrive. She's dedicated her career to empowering business owners by transforming their operations, building strong teams, and fostering a culture of success.</p>
          <p>Her expertise lies in recruiting the right talent to align with a business's goals and culture, ensuring a perfect fit for long-term growth. Camille is also passionate about training staff in sales and customer service, helping businesses develop a sales-driven culture that enhances customer retention and profitability. Beyond staffing, she specializes in creating streamlined operational handbooks, enabling businesses to run efficiently and effectively.</p>
          <p>Camille's approach is rooted in understanding the unique needs of each business she works with, whether it's a boutique fitness studio or another small business. Her ability to identify opportunities for growth, implement strategic processes, and build cohesive teams has made her a trusted partner for businesses looking to scale, regroup, or prepare for an exit.</p>
          <p>With a deep commitment to helping businesses succeed, Camille's not just a consultant but a catalyst for transformation, bringing clarity, structure, and growth to every business she touches.</p>
          <GetInTouch className={`button--large ${styles.button}`} />
        </div>
      </section>
    </>
  );
}