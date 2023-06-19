import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { Typography } from "@material-ui/core";


export const RegisterPage = () => {
  const navigate = useNavigate();
  const { container, registerContainer, login, loginLink, failedRegisterText, button } = styles;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [enableWarning, setEnableWarning] = useState(false);
  const [failedRegister, setFailedRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.ok) {
        setFailedRegister(false);
        navigate("/login");
        console.log("Registration successful");
      } else if (response.status === 409) {
        setFailedRegister(true);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <div className={container}>
      <form className={registerContainer}>
        <Typography variant="h5">Register here</Typography>
        {failedRegister &&
          <div className={failedRegisterText}>Email is already in use</div>
        }
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setFirstName(event.target.value)}
          placeholder="First Name"
          type="text"
          value={firstName}
          enableWarning={enableWarning && firstName === ""}
        />
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setLastName(event.target.value)}
          placeholder="Last Name"
          type="text"
          value={lastName}
          enableWarning={enableWarning && lastName === ""}
        />
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          value={password}
          enableWarning={enableWarning && password === ""}
        />
        <InputField
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setEmail(event.target.value)}
          placeholder="E-mail"
          type="text"
          value={email}
          enableWarning={enableWarning && email === ""}
        />
        <Button
          variant="contained"
          className={button}
          onClick={(event) => {
            if (!firstName || !lastName || !password || !email) {
              setEnableWarning(true);
              return;
            }

            handleSubmit(event)
          }}>
          Register
        </Button>
        <span className={login}>
          Already have an account? <Link className={loginLink} to="/login">Log in here</Link>
        </span>
      </form>
    </div>
  );
};
