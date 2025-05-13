import { Link } from 'react-router-dom';
import GetInTouch from "../components/GetInTouch";    

import styles from '../styles/components/nav.module.scss';
import footerstyles from '../styles/components/footer.module.scss';

const Layout = ({ children }) => (
  <div className="container">
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">OutThere&</Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <GetInTouch />
        </li>
      </ul>
    </nav>
    <main>{children}</main>
    <footer className={footerstyles.footer}>
      <p>&copy; 2024 – {new Date().getFullYear()} OutThere&. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;