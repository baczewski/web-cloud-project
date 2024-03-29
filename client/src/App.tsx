import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import Layout from './components/Layout/Layout';
import { useStyles } from './AppStyles';
import Details from './components/Details/Details';
import { AssignmentPage } from "./pages/todo/AssignmentPage";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { NotFoundPage } from "./pages/notFound/NotFoundPage";
import PublicRoute from './components/PublicRoute/PublicRoute';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />} >
              <Route path="/assignments" element={<AssignmentPage />} />
              <Route path="/notes" element={<HomePage />} />
            </Route>
            <Route path="/details/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
