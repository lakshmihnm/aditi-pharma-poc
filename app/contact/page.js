"use client";

export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 32, background: "#f5f5f5", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24, fontSize: "2rem", color: "#1976d2" }}>Contact Us</h1>
      <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #eee", marginBottom: 24 }}>
        <h2 style={{ color: "#009688", marginBottom: 10 }}>Aditi Pharma</h2>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          <span style={{ color: '#444' }}>Address:</span> R T Nagar, Bengaluru, Karnataka - 560032
        </div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          <span style={{ color: '#444' }}>Phone:</span> +91 98765 43210
        </div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          <span style={{ color: '#444' }}>Email:</span> contact@aditipharma.com
        </div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          <span style={{ color: '#444' }}>Customer Support:</span> 1800-123-4567 (Toll Free)
        </div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          <span style={{ color: '#444' }}>Working Hours:</span> Mon-Sat, 9:00 AM - 7:00 PM
        </div>
      </div>
      <div style={{ background: "#e3f2fd", padding: 18, borderRadius: 10, textAlign: "center", color: '#1976d2', fontWeight: 500 }}>
        For any queries, feedback, or support, feel free to reach out to us. We are here to help you!
      </div>
    </div>
  );
}
