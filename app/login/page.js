"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: 340, margin: "60px auto", padding: 24, background: "#f5f5f5", borderRadius: 10 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            required
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 6, background: "#0070f3", color: "#fff", fontWeight: 600, border: "none" }}>
          Login
        </button>
      </form>
    </div>
  );
}
