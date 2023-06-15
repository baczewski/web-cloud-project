import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { login } from "./loginUtils";
import { Container } from "@material-ui/core";
import "./LoginPage.css";

export const LoginPage = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className="container" component="main" maxWidth="xs">
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
          // type="submit"
          onClick={() => {
            login(name, password);
            setName("");
            setPassword("");
          }}>Login</Button>
      </form>
    </Container>
  );
};
