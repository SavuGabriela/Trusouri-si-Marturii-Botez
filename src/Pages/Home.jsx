import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Daruieste zambete! Daruieste emotie! </h1>
        <p style={styles.subtitle}>
          Trusouri și mărturii cusute cu grijă, pentru botezuri pline de har și
          tradiție.
        </p>
        <div style={styles.buttons}>
          <Link to="/trusouri" style={styles.button}>
            Vezi Trusouri
          </Link>
          <Link to="/marturii" style={styles.button}>
            Vezi Mărturii
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1573164574572-cb89e39749a1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    color: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '2rem',
    fontStyle: 'italic',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    backgroundColor: '#f4e3c1',
    padding: '0.8rem 1.5rem',
    borderRadius: '10px',
    textDecoration: 'none',
    color: '#5a4231',
    fontWeight: '600',
    fontFamily: 'Georgia, serif',
    transition: 'all 0.3s ease',
  },
};

export default Home;
