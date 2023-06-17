import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { login } from "./loginUtils";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form className="login-container">
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setName(event.target.value)}
          placeholder="Username"
          type="text"
          value={name}
        />
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black", width: "50%", alignSelf: "center" }}
          onClick={() => {
            login(name, password);
            setName("");
            setPassword("");
          }}>
          Login
        </Button>
        <span className="register">
          Don't have an account? <Link className="register-link" to="/register">Register here</Link>
        </span>
      </form>
    </div>
  );
};