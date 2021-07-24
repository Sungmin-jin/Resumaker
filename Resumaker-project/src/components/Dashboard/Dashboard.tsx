import React, { useEffect, useRef, useState } from "react";
import { Template } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import MyTemplateThumbnail from "./MyTemplateThumbnail";
import { clearDashboard, loadDashboard } from "../../modules/dashboard/action";
import { RootReducerType } from "../../modules";
import { useHistory } from "react-router-dom";
import { getTemplateSuccess } from "modules/template/action";

const Dashboard = () => {
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: RootReducerType) => state.auth.user?.email
  );
  const isAuthenticated = useSelector(
    (state: RootReducerType) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    history.push("/signin");
  }

  const dashboardList = useSelector(
    (state: RootReducerType) => state.dashboard.data
  );

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(
    (entries: Array<IntersectionObserverEntry>) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        dispatch(loadDashboard());
      }
    },
    options
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (ref.current) observer.observe(ref.current!);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [dashboardList]);

  useEffect(() => {
    return () => {
      console.log("dashboard");
      dispatch(clearDashboard());
    };
  }, []);

  return (
    <section className="dashboard-container">
      <p className="dashboard-greeting">
        Hello,{" "}
        <span className="dashboard-greeting-user-email">{userEmail}</span>
      </p>
      <header className="dashboard-header">My templates</header>
      <section className="dashboard-my-templates">
        {dashboardList.map(({ _id }) => (
          <MyTemplateThumbnail key={_id} templateId={_id} />
        ))}
        <div ref={ref}></div>
      </section>
    </section>
  );
};

export default Dashboard;
