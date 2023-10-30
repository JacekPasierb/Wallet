import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import HomePage from "./Pages/HomePage/HomePage";
import StatePage from "./Pages/StatePage/StatePage";
import CurrencyPage from "./Pages/CurrencyPage/CurrencyPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/home" || currentPath === "/diagram") {
      dispatch(refreshUser());
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route element={<DashboardPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/diagram" element={<StatePage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
