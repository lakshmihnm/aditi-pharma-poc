"use client";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Welcome to Aditi Pharma</h1>
          <p>Your trusted partner for medicines, wellness, and healthcare essentials.</p>
        </div>
        <img src="https://cdn.netmeds.tech/v2/plain-cake-860195/original/storefront/images/footer_logo.svg" alt="Banner" className={styles.bannerImg} />
      </div>

      {/* Categories Section */}
      <div className={styles.categories}>
        {['Pain Relief', 'Skin Care', 'Wellness', 'Antibiotics', 'Supplements'].map(cat => (
          <div key={cat} className={styles.categoryCard}>{cat}</div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className={styles.featuredSection}>
        <h2 className={styles.featuredTitle}>Featured Products</h2>
        <div className={styles.featuredGrid}>
          {/* Example featured products */}
          <div className={styles.productCard}>
            <img src="https://th.bing.com/th/id/OIP.V7Y-gpYU2fjqV94AycDAEwHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3" alt="Paracetamol" className={styles.productImg} />
            <div className={styles.productName}>Paracetamol 500mg</div>
            <div className={styles.productPrice}>₹ 248</div>
          </div>
          <div className={styles.productCard}>
            <img src="https://th.bing.com/th/id/OIP.U3hRxJisg6KuhxfybvAs1gHaHa?w=201&h=201&c=7&r=0&o=7&pid=1.7&rm=3" alt="Ibuprofen" className={styles.productImg} />
            <div className={styles.productName}>Ibuprofen 400mg</div>
            <div className={styles.productPrice}>₹ 290</div>
          </div>
          <div className={styles.productCard}>
            <img src="https://th.bing.com/th/id/OIP.0dcDAilBAm5aGxzgEiAj9gHaFd?w=233&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Aspirin" className={styles.productImg} />
            <div className={styles.productName}>Aspirin 300mg</div>
            <div className={styles.productPrice}>₹ 231</div>
          </div>
          <div className={styles.productCard}>
            <img src="https://th.bing.com/th/id/OIP._xcpdE9UKUeopBZo52ruTwHaFc?w=244&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Cetirizine" className={styles.productImg} />
            <div className={styles.productName}>Cetirizine 10mg</div>
            <div className={styles.productPrice}>₹ 353</div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className={styles.companyInfo}>
        <h2 className={styles.companyTitle}>About Aditi Pharma</h2>
        <p className={styles.companyText}>
          <strong>Aditi Pharma</strong> is a leading pharmaceutical company in India, offering a wide range of medicines and wellness products. We are committed to quality, innovation, and customer satisfaction.
        </p>
        <div className={styles.companyLinks}>
          <a href="#" className={styles.companyLink}>About Us</a>
          <a href="#" className={styles.companyLink}>Careers</a>
          <a href="#" className={styles.companyLink}>Terms & Conditions</a>
          <a href="#" className={styles.companyLink}>Shipping Policy</a>
        </div>
      </div>
    </div>
  );
}
