import { useState } from "react";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="container">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
