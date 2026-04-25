import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

const Login = () => {
  const [username, setUsername] = useState("hager_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await loginUser(username, password);
      if (res?.token) {
        localStorage.setItem("token", res.token);
        navigate("/");
      } else {
        throw new Error("Wrong within login");
      }
    } catch (err) {
      setError(err.message || "Wrong within login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="card login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button className="btn" type="submit" disabled={loading}>{loading ? "Loading...." : "Login"}</button>
        <p className="muted small">Note:you can use virtual data</p>
      </form>
    </div>
  );
};

export default Login;
