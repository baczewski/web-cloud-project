import { useContext, useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { GlobalContext } from "../../context/AppContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { updateGlobalState } = useContext(GlobalContext);

  const { container, loginContainer, register, registerLink, failedLoginText } = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        response.json().then(data => {
          updateGlobalState(data);
          localStorage.setItem('user', data?.jwt);
          navigate("/notes");
        });
      } else if (response.status === 400) {
        setFailedLogin(true);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <div className={container}>
      <form className={loginContainer}>
        {failedLogin &&
          <div className={failedLoginText}>Email or password is invalid</div>
        }
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
              setFailedLogin(true);
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
