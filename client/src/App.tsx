import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import Layout from './components/Layout/Layout';
import { useStyles } from './AppStyles';
import Details from './components/Details/Details';
import { AssignmentPage } from "./pages/todo/AssignmentPage";

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
            <Route path="/assignments" element={<AssignmentPage />} />
            <Route path="/details" element={<Details title='Title' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
