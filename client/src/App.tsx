import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { MyAppBar } from "./components/AppBar/MyAppBar";


const App = () => {
  return (
    <>
      <MyAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register" element={<div>IVAN</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
