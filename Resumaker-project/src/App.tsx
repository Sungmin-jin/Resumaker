import React, { useEffect } from "react";
import setAuthToken from "./util/setAuthToken";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "components/CommonComponent/Container";
import Header from "./components/CommonComponent/Header";
import MainPage from "./components/MainPage/MainPage";
import TemplateListView from "./components/TemplateListView/TemplateListView";
import Template1 from "./components/Template1/Template1";
import Dashboard from "components/Dashboard/Dashboard";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import "./App.scss";
import Footer from "components/CommonComponent/Footer/Footer";
import EditTemplate1 from "components/EditTemplate1/EditTemplate1";
import { loadUserAction, LOGOUT } from "modules/auth/action";
import { loadKeys } from "modules/api/reducer";
import AboutUs from "components/CommonComponent/Footer/AboutUs";
import LatestNews from "components/CommonComponent/Footer/LatestNews";
import HowResumakerWorks from "components/CommonComponent/Footer/HowResumakerWorks";
import PreviewTemplate1 from "components/PreviewTemplate1/PreviewTemplate1";
import { setTemplate } from "modules/template/action";
import { initialState } from "components/EditTemplate1/initialState";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadKeys());
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch(loadUserAction());
    }
    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/template-list/" component={TemplateListView} />
        <Route
          exact
          path="/template-list/1"
          render={() => {
            dispatch(setTemplate(initialState));
            return <PreviewTemplate1 />;
          }}
        />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/template-list/1/edit" component={EditTemplate1} />
        <Route exact path="/template-list/1/preview" component={PreviewTemplate1} />
        <Route exact path="/how-resumaker-works" component={HowResumakerWorks} />
        <Route exact path="/latest-news" component={LatestNews} />
        <Route exact path="/about-us" component={AboutUs} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
