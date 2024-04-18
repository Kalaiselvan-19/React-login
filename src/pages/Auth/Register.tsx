import React, { useState } from "react";
import EyeOpenIcon from "../../assets/icons/EyeOpenIcon.svg";
import EyeCloseIcon from "../../assets/icons/EyeCloseIcon.svg";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../component/textField";

const Register = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      alert("Password and confirm password do not match. Please check once");
      return;
    }
    console.log("register:", register);
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setRegister({ ...register, showPassword: !register.showPassword });
  };

  const toggleConfirmPasswordVisibility = () => {
    setRegister({
      ...register,
      showConfirmPassword: !register.showConfirmPassword,
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Sign up to Vendy</h2>
        <p>Your digital biz BFF! Sell, manage, thrive!</p>
        <div className="form-group">
          <p>Email</p>
          <CustomTextField
            type="text"
            name="email"
            value={register.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group password-input">
          <p>Password</p>
          <CustomTextField
            type={register.showPassword ? "text" : "password"}
            name="password"
            value={register.password}
            onChange={handleChange}
            required
          />
          <div className="eye-icon" onClick={togglePasswordVisibility}>
            <img
              src={register.showPassword ? EyeOpenIcon : EyeCloseIcon}
              alt={register.showPassword ? "Hide Password" : "Show Password"}
            />
          </div>
        </div>
        <div className="form-group password-input">
          <p>Confirm Password</p>
          <CustomTextField
            type={register.showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={register.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
            <img
              src={register.showConfirmPassword ? EyeOpenIcon : EyeCloseIcon}
              alt={
                register.showConfirmPassword ? "Hide Password" : "Show Password"
              }
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
