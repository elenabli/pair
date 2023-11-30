import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";



const LoginComponent = ({ setIsAuthenticated }) => {
  const loginUrl = "/api/user/login";
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const email = emailInput.value;
  const password = passwordInput.value;

  const { handleLogin } = useLogin(email, password, setIsAuthenticated, loginUrl);

  return (
    <div>
      <h2>Login</h2>
      <label>
        Email:
        <input
        {...emailInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          {...passwordInput}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
