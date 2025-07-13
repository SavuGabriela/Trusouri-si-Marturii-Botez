import React from 'react';

const ProductCard = ({ product, onFavorite }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>{product.price} RON</p>
      <button
        style={styles.button}
        onClick={onFavorite}
        aria-label={`Adaugă ${product.name} la favorite`}
      >
        ❤️ Adaugă la favorite
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fffaf3',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
    color: '#5a4231',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
  },
  description: {
    fontStyle: 'italic',
    marginBottom: '0.8rem',
    color: '#7a6452',
    flexGrow: 1,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1rem',
    backgroundColor: '#5a4231',
    color: '#fffaf3',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Playfair Display, serif',
    transition: 'background-color 0.3s ease',
  },
};

export default ProductCard;
