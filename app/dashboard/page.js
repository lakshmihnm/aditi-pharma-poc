"use client";

export default function Dashboard() {
  return (
    <div style={{ margin: "2rem", padding: 0, background: "#f5f5f5", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      {/* Banner Section */}
      <div style={{ width: "100%", height: 220, background: "linear-gradient(90deg,#1976d2 60%,#fff 100%)", borderTopLeftRadius: 16, borderTopRightRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px" }}>
        <div>
          <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 700, marginBottom: 12 }}>Welcome to Aditi Pharma Healthstore</h1>
          <p style={{ color: "#e3f2fd", fontSize: "1.2rem" }}>Your trusted partner for medicines, wellness, and healthcare essentials.</p>
        </div>
        <img src="https://cdn.netmeds.tech/v2/plain-cake-860195/original/storefront/images/footer_logo.svg" alt="Banner" style={{ height: 120 }} />
      </div>

      {/* Categories Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: 32, margin: "32px 0" }}>
        {['Pain Relief', 'Skin Care', 'Wellness', 'Antibiotics', 'Supplements'].map(cat => (
          <div key={cat} style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee", padding: "18px 32px", fontWeight: 600, color: "#1976d2", fontSize: "1.1rem", cursor: "pointer" }}>{cat}</div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div style={{ margin: "0 32px 32px 32px" }}>
        <h2 style={{ color: "#1976d2", marginBottom: 18, fontSize: "1.5rem" }}>Featured Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {/* Example featured products */}
          <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee", padding: 18, textAlign: "center" }}>
            <img src="https://th.bing.com/th/id/OIP.V7Y-gpYU2fjqV94AycDAEwHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3" alt="Paracetamol" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 10 }} />
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>Paracetamol 500mg</div>
            <div style={{ color: "#009688", fontWeight: 500 }}>₹ 248</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee", padding: 18, textAlign: "center" }}>
            <img src="https://th.bing.com/th/id/OIP.U3hRxJisg6KuhxfybvAs1gHaHa?w=201&h=201&c=7&r=0&o=7&pid=1.7&rm=3" alt="Ibuprofen" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 10 }} />
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>Ibuprofen 400mg</div>
            <div style={{ color: "#009688", fontWeight: 500 }}>₹ 290</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee", padding: 18, textAlign: "center" }}>
            <img src="https://th.bing.com/th/id/OIP.0dcDAilBAm5aGxzgEiAj9gHaFd?w=233&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Aspirin" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 10 }} />
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>Aspirin 300mg</div>
            <div style={{ color: "#009688", fontWeight: 500 }}>₹ 231</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #eee", padding: 18, textAlign: "center" }}>
            <img src="https://th.bing.com/th/id/OIP._xcpdE9UKUeopBZo52ruTwHaFc?w=244&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Cetirizine" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 10 }} />
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>Cetirizine 10mg</div>
            <div style={{ color: "#009688", fontWeight: 500 }}>₹ 353</div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div style={{ background: "#fff", padding: 28, borderRadius: 12, boxShadow: "0 2px 8px #eee", margin: "0 32px 32px 32px" }}>
        <h2 style={{ color: "#0070f3" }}>About Aditi Pharma</h2>
        <p style={{ marginTop: 12, fontSize: "1.1rem", color: "#333" }}>
          <strong>Aditi Pharma</strong> is a leading pharmaceutical company in India, offering a wide range of medicines and wellness products. We are committed to quality, innovation, and customer satisfaction.
        </p>
        <div style={{ marginTop: 18, display: "flex", gap: 32, justifyContent: "center" }}>
          <a href="#" style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500 }}>About Us</a>
          <a href="#" style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500 }}>Careers</a>
          <a href="#" style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500 }}>Terms & Conditions</a>
          <a href="#" style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500 }}>Shipping Policy</a>
        </div>
      </div>
    </div>
  );
}
