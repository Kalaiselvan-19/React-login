import React, { useState } from "react";
import "./Login.css";
import EyeOpenIcon from "../../assets/icons/EyeOpenIcon.svg";
import EyeCloseIcon from "../../assets/icons/EyeCloseIcon.svg";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../component/textField";

const Login: React.FC = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login:", login);
    navigate("/home");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign in to Vendy</h2>
        <p>Your digital biz BFF! Sell, manage, thrive!</p>
        <div className="form-group">
          <p>Email</p>
          <CustomTextField
            type="text"
            name="email"
            value={login.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group password-input">
          <p>Password</p>
          <CustomTextField
            type={showPassword ? "text" : "password"}
            name="password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <div className="eye-icon" onClick={togglePasswordVisibility}>
            <img
              src={showPassword ? EyeOpenIcon : EyeCloseIcon}
              alt={showPassword ? "Hide Password" : "Show Password"}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        <div className="forgot-password">
          <a href="/register">Forgot password?</a>
        </div>
        <div className="sign-up">
          <p>
            Don't have an account ? <a href="/register">New User</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
