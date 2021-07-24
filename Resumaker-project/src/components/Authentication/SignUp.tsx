import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../../modules/auth/action";
import ThirdPartyAuthentication from "./ThirdPartyAuthentication";
import { Link } from "react-router-dom";
import { SHOW_HEADER, HIDE_HEADER } from "../../modules/appLayout";
import "react-toastify/dist/ReactToastify.css";
interface SignUpForm {
  email: string;
  password: string;
  confirm: string;
}
import AuthError from "./AuthError/AuthError";
import { credentialError } from "../../modules/auth/action";

const SignUp = () => {
  // @ts-ignore
  const [form, setForm] = useState<SignUpForm>({
    email: "",
    password: "",
    confirm: "",
  });
  const { email, password, confirm } = form;
  const dispatch = useDispatch();

  // @ts-ignore
  useEffect(() => {
    dispatch({ type: HIDE_HEADER });
    return () => {
      dispatch({ type: SHOW_HEADER });
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // @ts-ignore
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password === confirm) {
      dispatch(registerAction({ email, password }));
    } else {
      dispatch(credentialError({ msg: "Passwords does not match" }));
    }
  };

  return (
    <main className="authentication">
      <section className="authentication-container">
      <AuthError />
        <h4 className="authentication-title">Sign up</h4>
        <form onSubmit={(e) => onSubmit(e)} className="form-container">
          <div className="authentication_input">
            <input
              className="auth-email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
            <input
              className="auth-password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
            <input
              className="auth-confirm"
              type="password"
              name="confirm"
              value={confirm}
              onChange={onChange}
              placeholder="Confirm password"
            />
          </div>
          <div className="authentication-input-misc">
            <div className="authentication-remember-me">
              <input type="checkbox" className="chk-box" />
              <label className="chk-box-label" htmlFor="chk-box">
                Remember Me
              </label>
            </div>
            <div className="authentication-auth-btn-wrapper">
              <button className="auth-btn" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </form>
        <div className="authentication-message">
          Already have an account?
          <Link to="/signin">
            <span className="msg-link">Login with your account</span>
          </Link>
        </div>
        <div className="hr-element"> Or</div>
        <ThirdPartyAuthentication />
      </section>

      <section className="form-picture-container">
        <img
          className="form-picture"
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80"
        />
      </section>
    </main>
  );
};

export default SignUp;
