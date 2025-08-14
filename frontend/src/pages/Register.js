import React, { useState } from "react";
import { registerUser } from "../services/api";
import "./Auth.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // In your Register.js component
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    try {
      const res = await registerUser(username, password); // Pass as separate arguments
      alert(res.message);
    } catch (error) {
      alert(error.message);
    }
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser({ username, password });
    alert(res.message);
  };*/


  
/*  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
     return;
    }
    const res = await registerUser({ username, password });
    alert(res.message);
 };*/

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Inscription..." : "S'inscrire"}
        </button>

        <p>
          Déjà un compte ? <a href="/login">Connectez-vous</a>
        </p>
      </form>
    </div>
  );
}
