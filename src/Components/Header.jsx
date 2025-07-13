import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Daruieste zambete! Daruieste emotie!</h2>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Acasă
        </Link>
        <Link to="/trusouri" style={styles.link}>
          Trusouri
        </Link>
        <Link to="/marturii" style={styles.link}>
          Mărturii
        </Link>
        <Link to="/despre" style={styles.link}>
          Despre
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#fffaf3',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e0dcd1',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.8rem',
    color: '#5a4231',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#5a4231',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
};

export default Header;
