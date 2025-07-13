import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    mesaj: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validare simplă
    if (!formData.nume || !formData.email || !formData.mesaj) {
      setStatus('Te rog completează toate câmpurile.');
      return;
    }

    // Simulăm trimiterea mesajului
    setStatus('Mesajul tău a fost trimis cu drag! Mulțumim că ne-ai scris.');

    // Resetare formular după trimitere
    setFormData({
      nume: '',
      email: '',
      mesaj: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact</h2>
      <p style={styles.intro}>
        Ai întrebări sau dorești să faci o comandă? Completează formularul de
        mai jos și te vom contacta cât mai curând.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nume complet:
          <input
            type="text"
            name="nume"
            value={formData.nume}
            onChange={handleChange}
            style={styles.input}
            placeholder="Numele tău"
          />
        </label>

        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="adresa ta de email"
          />
        </label>

        <label style={styles.label}>
          Mesaj:
          <textarea
            name="mesaj"
            value={formData.mesaj}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Scrie-ne ce dorești..."
          />
        </label>

        <button type="submit" style={styles.button}>
          Trimite
        </button>
      </form>

      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#fffaf3',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
    color: '#5a4231',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
    fontFamily: 'Playfair Display, serif',
  },
  intro: {
    fontSize: '1rem',
    marginBottom: '2rem',
    fontStyle: 'italic',
    color: '#7a6452',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  label: {
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    color: '#5a4231',
  },
  input: {
    marginTop: '0.3rem',
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #cdb9a6',
    backgroundColor: '#fffaf3',
    color: '#5a4231',
  },
  textarea: {
    marginTop: '0.3rem',
    padding: '0.6rem 0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #cdb9a6',
    backgroundColor: '#fffaf3',
    color: '#5a4231',
    resize: 'vertical',
    minHeight: '100px',
  },
  button: {
    marginTop: '1rem',
    padding: '0.8rem',
    fontSize: '1.1rem',
    backgroundColor: '#5a4231',
    color: '#fffaf3',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Playfair Display, serif',
    transition: 'background-color 0.3s ease',
  },
  status: {
    marginTop: '1rem',
    fontStyle: 'italic',
    color: '#417505',
  },
};

export default Contact;
