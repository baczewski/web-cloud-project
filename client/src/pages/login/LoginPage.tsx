import { useContext, useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { GlobalContext } from "../../context/AppContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { updateGlobalState } = useContext(GlobalContext);

  const { container, loginContainer, register, registerLink }  = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });

      if (response.ok) {
        // Registration successful, handle the response as needed
        response.json().then(data => updateGlobalState(data));
        navigate("/home");
      } else {
        window.alert("FAILED TO LOGIN")
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <div className={container}>
      <form className={loginContainer}>
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setEmail(event.target.value)}
          placeholder="Email"
          type="text"
          value={email}
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
          onClick={(event) => {
            if (!password || !email) {
              window.alert("POPULNI")
              // setEnableWarning(true);
              return;
            }

            handleSubmit(event)
          }}>
          Login
        </Button>
        <span className={register}>
          Don't have an account? <Link className={registerLink} to="/register">Register here</Link>
        </span>
      </form>
    </div>
  );
};
