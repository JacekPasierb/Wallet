import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
