import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import jobs from '../jobs';
import styles from '../styles/pages/job.module.scss';

export default function Job() {
  const { slug } = useParams();
  const job = jobs[slug];

  if (!job) {
    return (
      <div className="container--narrow">
        <section className={styles.job}>
          <h2>Role not found</h2>
          <p>This position may have been filled or the link may be incorrect.</p>
          <a href="/jobs" className="button button--large" style={{display: 'block', marginTop: '40px'}}>View Available Positions</a>
        </section>
      </div>
    );
  }

  const { meta, default: Content } = job;

  return (
    <>
      <Helmet>
        <title>{meta.title} | OutThere&</title>
      </Helmet>

      <section className={styles.job}>
        <div className="container--narrow">
          <div className={styles.header}>
            <h2>{meta.title}</h2>
            <div className={styles.meta}>
              {meta.location && <span>{meta.location}</span>}
              {meta.type && <span>{meta.type}</span>}
            </div>
          </div>

          <Content />

          <a
            href={meta.applyLink}
            className={`button button--large ${styles.applyButton}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
