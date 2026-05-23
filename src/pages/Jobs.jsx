import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import jobs from '../jobs';
import styles from '../styles/pages/jobs.module.scss';

export default function Jobs() {
  const listings = Object.values(jobs);

  return (
    <>
      <Helmet>
        <title>Open Positions | OutThere&</title>
      </Helmet>

      <section className={styles.jobs}>
        <div className="container--narrow">
          <h2>Open Positions</h2>

          {listings.length === 0 ? (
            <p>No open positions at this time. Check back soon.</p>
          ) : (
            <ul>
              {listings.map(({ meta }) => (
                <li key={meta.slug}>
                  {meta.externalLink ? (
                    <a href={meta.externalLink} target="_blank" rel="noopener noreferrer">
                      <span className={styles.title}>{meta.title}</span>
                      <span className={styles.detail}>
                        {[meta.location, meta.type].filter(Boolean).join(' · ')}
                      </span>
                    </a>
                  ) : (
                    <Link to={`/job/${meta.slug}`}>
                      <span className={styles.title}>{meta.title}</span>
                      <span className={styles.detail}>
                        {[meta.location, meta.type].filter(Boolean).join(' · ')}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
