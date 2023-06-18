import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import Layout from './components/Layout/Layout';
import { useStyles } from './AppStyles';
import Details from './components/Details/Details';
import { Type } from './utils/Type';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/details" element={<Details title='Title' type={Type.NOTE} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
