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
      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
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
