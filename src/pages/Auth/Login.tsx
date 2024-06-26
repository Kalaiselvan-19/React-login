import React, { useCallback, useState } from "react";
import "./Login.css";
import EyeOpenIcon from "../../assets/icons/EyeOpenIcon.svg";
import EyeCloseIcon from "../../assets/icons/EyeCloseIcon.svg";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../component/textField";

type LoginProps = {
  email: string;
  password: string;
  showPassword: boolean;
};

const Login: React.FC = () => {
  const [login, setLogin] = useState<LoginProps>({
    email: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login:", login);
    navigate("/viewall");
  };

  const togglePasswordVisibility = useCallback(() => {
    setLogin({ ...login, showPassword: !login.showPassword });
  }, [login]);

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
            type={login.showPassword ? "text" : "password"}
            name="password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <div className="eye-icon" onClick={togglePasswordVisibility}>
            <img
              src={login.showPassword ? EyeOpenIcon : EyeCloseIcon}
              alt={login.showPassword ? "Hide Password" : "Show Password"}
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
