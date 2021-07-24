import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerType } from "../../modules";
import { LOGOUT } from "../../modules/auth/action";
import { clearTemplate } from "modules/template/action";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch();
  const showHead = useSelector((state: RootReducerType) => state.appLayout.header);
  const isAuthenticated: boolean = useSelector(
    (state: RootReducerType) => state.auth.isAuthenticated
  );

  const clickLogout = (): void => {
    dispatch(clearTemplate());
    dispatch({ type: LOGOUT });
  };

  const navMenus = (
    <ul className="header-nav-ul">
      <li className="header-nav-li">
        <Link className="header-nav-menu-a" to="/template-list">
          Templates
        </Link>
      </li>
      {isAuthenticated ? (
        <>
          <li className="header-nav-li">
            <Link className="header-nav-menu-a" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="header-nav-li" onClick={clickLogout}>
            <Link className="header-nav-menu-a" to="/">
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="header-nav-li">
            <Link className="header-nav-menu-a" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="header-nav-li">
            <Link className="header-nav-menu-a" to="/signin">
              Log In
            </Link>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link className="header-nav-logo-a" to="/">
          <span className="header-nav-logo-span">Resumaker</span>
        </Link>
        {showHead && (
          <>
            <div className="header-nav-drop-down-toggle" onClick={() => setToggle((prev) => !prev)}>
              <i className="far fa-user header-nav-drop-down-toggle-icon" />
              {toggle && navMenus}
            </div>
            <div className="header-nav-tablet">{navMenus}</div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
