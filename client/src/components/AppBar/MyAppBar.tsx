import { AppBar } from "@material-ui/core";
import "./MyAppBar.css";

export const MyAppBar = () => {
  return (
    <AppBar className="navbar">
      <div>
        <img className="logo-img" src="logo.gif" alt="logo"/>
      </div>
      <div className="center-logo">SUS DOG Notes</div>
      <div className="menu">Menu</div>
    </AppBar>
  );
};