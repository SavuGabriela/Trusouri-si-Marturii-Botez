import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Despre Noi</h2>

      <p style={styles.paragraph}>
        În fiecare trusou pe care îl creăm se țese o poveste — o poveste de
        dragoste, grijă și tradiție. Aici este locul unde mâinile pricepute
        împletesc cu răbdare și pasiune fiecare detaliu, aducând la viață
        amintiri ce vor dăinui peste timp.
      </p>

      <p style={styles.paragraph}>
        Folosim materiale naturale și decorăm cu elemente care amintesc de
        frumusețea autentică a satului românesc. Credem că fiecare botez este un
        moment sacru care merită să fie celebrat cu respect.
      </p>

      <p style={styles.paragraph}>
        Te invităm să descoperi lumea noastră, să te inspiri și să pornești
        alături de noi pe drumul amintirilor.
      </p>

      <div style={styles.signature}>
        <p>Cu drag,</p>
        <p>
          <em>Echipa Trusouri și Mărturii Botez</em>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#fffaf3',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
    color: '#5a4231',
    lineHeight: '1.7',
  },
  title: {
    fontSize: '2.4rem',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#5a4231',
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '1.2rem',
    fontStyle: 'italic',
    color: '#7a6452',
  },
  signature: {
    marginTop: '2rem',
    fontSize: '1rem',
    textAlign: 'right',
    color: '#5a4231',
    fontStyle: 'normal',
  },
};

export default About;
