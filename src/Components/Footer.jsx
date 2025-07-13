import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        {new Date().getFullYear()} Daruieste zambete! Daruieste emotie!{' '}
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fffaf3',
    borderTop: '1px solid #e0dcd1',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
  },
  text: {
    color: '#5a4231',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  },
};

export default Footer;
