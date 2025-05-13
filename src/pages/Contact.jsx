import { InlineWidget } from "react-calendly";
import styles from "../styles/pages/contact.module.scss";

export default function Contact() {

  return (  
    <div className={styles.contact}>
      <section>
        <h2>Get in Touch</h2>
        <span className={styles.highlight}>Let's chat about your business. From recruitment to revenue OT& can help you grow.</span>
      </section>
      <section>
        <InlineWidget 
          url="https://calendly.com/outthereand/30min" 
          utm={{
            utmMedium: 'Website',
            utmSource: 'outthereand.com',
            utmTerm: 'Website Inbound'
          }}
          pageSettings={{
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
          styles={{
            height: '690px',
            marginTop: '0',
            marginBottom: '0'
          }}
          />
      </section>
    </div>
  );
}