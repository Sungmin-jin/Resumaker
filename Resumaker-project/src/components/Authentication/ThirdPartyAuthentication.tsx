import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import {
  googleLoginAction,
  facebookLoginAction,
} from "../../modules/auth/action";
import { RootReducerType } from "../../modules";
import { credentialError } from "../../modules/auth/action";

const ThirdPartyAuthentication = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated: boolean = useSelector(
    (state: RootReducerType) => state.auth.isAuthenticated
  );
  const googleAPI: string | null = useSelector(
    (state: RootReducerType) => state.api.x_api_google
  );
  const facebookAPI: string | null = useSelector(
    (state: RootReducerType) => state.api.x_api_facebook
  );

  const googleSuccess = (res: GoogleLoginResponse) => {
    const profile = res.profileObj;
    const formData = {
      email: profile.email,
      googleId: profile.googleId,
    };
    dispatch(googleLoginAction(formData));
  };

  const facebookSuccess = (res: ReactFacebookLoginInfo) => {
    const formData = {
      email: res.email,
      facebookId: res.id,
    };
    dispatch(facebookLoginAction(formData));
  };

  const authFailure = (err) => {
    console.log(err);
    dispatch(credentialError({ msg: "Credential Error" }));
  };

  if (isAuthenticated) {
    if (localStorage.getItem("tempLocation")) {
      history.push(`${localStorage.getItem("tempLocation")}`);
      localStorage.removeItem("tempLocation");
    } else {
      history.push("/");
    }
  }
  if (googleAPI !== null && facebookAPI !== null) {
    return (
      <article className="authentication-third-party">
        <GoogleLogin
          clientId={googleAPI}
          onSuccess={googleSuccess}
          onFailure={(err) => {
            console.log("Google Error");
            console.log(err);
          }}
          render={(renderProps) => (
            <div className="third-party-wrapper" onClick={renderProps.onClick}>
              <div className="logo-wrapper">
                <img
                  src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                  alt="Google"
                />
              </div>
              <span className="third-party-text"> Sign in with Google</span>
            </div>
          )}
        />
        <FacebookLogin
          appId={facebookAPI}
          autoLoad={false}
          fields="email"
          callback={facebookSuccess}
          onFailure={(err) => {
            console.log("facebook Error");
            console.log(err);
          }}
          render={(renderProps: any) => (
            <div className="third-party-wrapper" onClick={renderProps.onClick}>
              <div className="logo-wrapper">
                <img
                  src="https://aux.iconspalace.com/uploads/facebook-circle-icon-256.png"
                  alt="Google"
                />
              </div>
              <span className="third-party-text">Sign in with Facebook</span>
            </div>
          )}
        />
      </article>
    );
  } else {
    return <></>;
  }
};

export default ThirdPartyAuthentication;
