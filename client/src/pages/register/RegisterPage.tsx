import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./RegisterPage.css";


export const RegisterPage = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")

  return (
    <div className="container">
      <form className="register-container">
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
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setEmail(event.target.value)}
          placeholder="E-mail"
          type="text"
          value={email}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black", width: "50%", alignSelf: "center" }}
          onClick={() => {
            console.log(name, password);
            setName("");
            setPassword("");
          }}>
          Register
        </Button>
        <span className="login">
          Already have an account? <Link className="login-link" to="/login">Log in here</Link>
        </span>
      </form>
    </div>
  );
};
