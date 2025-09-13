import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button className={styles.addToCart} onClick={onAddToCart}>Add to Cart</button>
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.mg}>{product.mg} MG</div>
      </div>
    </div>
  );
}
