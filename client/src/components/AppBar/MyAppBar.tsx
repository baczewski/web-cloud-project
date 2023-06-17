import { AppBar } from "@material-ui/core";
import "./MyAppBar.css";
import { GlobalContext } from "../../context/AppContext";
import { useContext } from "react";

export const MyAppBar = () => {
  const { globalState } = useContext(GlobalContext)

  return (
    <AppBar className="navbar">
      <div>
        <img className="logo-img" src="logo.gif" alt="logo"/>
      </div>
      <div className="center-logo">SUS DOG Notes</div>
      <div style={{marginLeft: "10%"}}>
      {!!globalState.jwt ?? 
        <div className="menu">Menu</div>
      }
      </div>
    </AppBar>
  );
};