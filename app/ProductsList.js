"use client";
import styles from './ProductsList.module.css';
import ProductCard from './ProductCard';
import CartModal from './CartModal';
import { useState } from 'react';

export default function ProductsList({ products }) {
  const [cartItems, setCartItems] = useState({}); // { [product.id]: { ...product, quantity } }
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { ...product, quantity: 1 }
      };
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => {
      const existing = prev[productId];
      if (!existing) return prev;
      if (existing.quantity === 1) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [productId]: { ...existing, quantity: existing.quantity - 1 }
      };
    });
  };

  const handleCartClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitCart = () => {
    setModalOpen(false);
    alert('Cart submitted!');
  };

  const cartCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className={styles.productsContainer}>
      <div className={styles.topBar}>
        <button className={styles.searchBtn} aria-label="Search">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search products..."
        />
        <div className={styles.spacer}></div>
        <button className={styles.cartBtn} aria-label="Cart" style={{position: 'relative'}} onClick={handleCartClick}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </button>
      </div>
      <div style={{ overflowX: 'auto', marginTop: 32 }}>
        <table className={styles.productsTable} style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8 }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              {/* <th style={{ padding: '12px 8px', textAlign: 'left' }}>Image</th> */}
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Price</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>MG</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                {/* <td style={{ padding: '10px 8px' }}>
                  <img src={product.image} alt={product.name} style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8, background: '#fafafa' }} />
                </td> */}
                <td style={{ padding: '10px 8px', fontWeight: 500 }}>{product.name}</td>
                <td style={{ padding: '10px 8px', color: '#009688', fontWeight: 600 }}>₹ {product.price}</td>
                <td style={{ padding: '10px 8px' }}>{product.mg} mg</td>
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                  <button
                    className={styles.addToCartTableBtn}
                    aria-label="Add to Cart"
                    onClick={() => handleAddToCart(product)}
                    style={{ background: '#0070f3', border: 'none', borderRadius: '50%', width: 32, height: 32, color: '#fff', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CartModal
        open={modalOpen}
        onClose={handleCloseModal}
        cartItems={Object.values(cartItems)}
        onAdd={id => handleAddToCart(products.find(p => p.id === id))}
        onRemove={handleRemoveFromCart}
        onSubmit={handleSubmitCart}
      />
      <CartModal
        open={modalOpen}
        onClose={handleCloseModal}
        cartItems={Object.values(cartItems)}
        onAdd={id => handleAddToCart(products.find(p => p.id === id))}
        onRemove={handleRemoveFromCart}
        onSubmit={handleSubmitCart}
      />
    </section>
  );
}
