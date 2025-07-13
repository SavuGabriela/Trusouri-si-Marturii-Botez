import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import Favorites from '../Components/Favorites'; // noua componentă

const Trusouri = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Eroare la încărcarea produselor.');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; // evită duplicatele
      return [...prev, product];
    });
  };

  const removeFromFavorites = (index) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.productsSection}>
        <h1 style={styles.heading}>Trusouri și Mărturii</h1>
        <div style={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onFavorite={() => addToFavorites(product)}
            />
          ))}
        </div>
      </div>

      <aside style={styles.favoritesSection}>
        <Favorites favorites={favorites} onRemove={removeFromFavorites} />
      </aside>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: 'Georgia, serif',
  },
  productsSection: {
    flex: 3,
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    color: '#5a4231',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  favoritesSection: {
    flex: 1,
    minWidth: '320px',
  },
};

export default Trusouri;
