"use client";

export default function About() {
  return (
    <div style={{ width: '100%', maxWidth: '1475px', margin: "2rem", padding: 32, background: "#f5f5f5", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24, fontSize: "2rem", color: "#1976d2" }}>About Us</h1>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <iframe
          title="ADITI PHARMA"
          src="https://www.google.com/maps?q=1st+main+GANGANAGAR+Bengaluru,+Karnataka+560032&output=embed"
          width="100%"
          height="500"
          style={{ border: 0, borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", minHeight: 400 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{ marginTop: 18, fontFamily: 'cursive', fontSize: '1.6rem', color: '#e91e63', fontWeight: 600 }}>
          K NO.22/A, 1ST FLOOR, 1ST MAIN
        </div>
        <div style={{ marginTop: 8, fontSize: '1.18rem', color: '#444', fontWeight: 500 }}>
          GANGANAGAR LAYOUT WARD NO.98, HEBBAL, Bengaluru - 560032
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#333", fontSize: "1.18rem" }}>
        We are located in the heart of Bengaluru, serving our customers with dedication and care.
      </p>
    </div>
  );
}
