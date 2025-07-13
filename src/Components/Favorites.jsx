import React from 'react';

const Favorites = ({ favorites, onRemove }) => {
  return (
    <div style={styles.favorites}>
      <h2 style={styles.heading}>Favoritele Tale</h2>
      {favorites.length === 0 ? (
        <p style={styles.empty}> Niciun model salvat</p>
      ) : (
        <ul style={styles.list}>
          {favorites.map((item, index) => (
            <li key={index} style={styles.item}>
              <div>
                <strong>{item.name}</strong>
              </div>
              <button style={styles.remove} onClick={() => onRemove(index)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  favorites: {
    backgroundColor: '#fffaf3',
    borderRadius: '15px',
    padding: '1.5rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
    fontFamily: 'Georgia, serif',
    color: '#5a4231',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.8rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #5a4231',
    paddingBottom: '0.3rem',
  },
  empty: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#7a6452',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #d8c7b1',
  },
  remove: {
    background: 'transparent',
    border: 'none',
    color: '#a34545',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
};

export default Favorites;
