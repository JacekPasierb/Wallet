import React, { Suspense } from "react";

// importy wewnętrzne
import css from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance/Balance";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";


const DashboardPage = () => {
  return (
    <div className={css.background}>
      <Header />
      <div className={css.container}>
        <Navigation />
        <Balance />
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;
