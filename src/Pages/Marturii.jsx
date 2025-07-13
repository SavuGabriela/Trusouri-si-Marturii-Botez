import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import Favorites from '../Components/Favorites';

const marturii = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1607277967694-6e0e51e0fdba',
    name: 'Inimioară din Ceară',
    description: 'Parfumată cu lavandă, împachetată în dantelă fină.',
    price: 25,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588167056545-61dbfc3b20d2',
    name: 'Lumânare Rustică',
    description:
      'Cu flori uscate și panglici din in, perfectă pentru o zi speciala.',
    price: 35,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1620836241327-f9c0f8e3682d',
    name: 'Borcan cu Miere',
    description:
      'Personalizat, legat cu sfoară și etichetă cu numele copilului.',
    price: 30,
  },
];

const Marturii = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromFavorites = (index) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.productsSection}>
        <h2 style={styles.title}>Mărturii pentru Botez</h2>
        <div style={styles.grid}>
          {marturii.map((product) => (
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
  favoritesSection: {
    flex: 1,
    minWidth: '320px',
  },
  title: {
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
};

export default Marturii
