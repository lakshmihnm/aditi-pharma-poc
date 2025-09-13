import styles from './CartModal.module.css';

export default function CartModal({ open, onClose, cartItems, onAdd, onRemove, onSubmit }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div className={styles.empty}>No products added.</div>
        ) : (
          <ul className={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div style={{ flex: 1 }}>
                  <div>{item.name}</div>
                  <div>${item.price} - {item.mg} MG</div>
                </div>
                <div className={styles.qtyControls}>
                  <button className={styles.qtyBtn} onClick={() => onRemove(item.id)}>-</button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button className={styles.qtyBtn} onClick={() => onAdd(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          className={styles.submitBtn}
          onClick={onSubmit}
          disabled={cartItems.length === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
