import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Sabit kullanıcı adı ve şifre kontrolü (ileride backend'e geçilebilir)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Kullanıcı adı veya şifre hatalı.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Giriş</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label>Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f9fafb",
  },
  card: {
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    color: "#111827",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
  },
  error: {
    color: "#dc2626",
    marginBottom: "1rem",
  },
};

export default AdminLogin;
