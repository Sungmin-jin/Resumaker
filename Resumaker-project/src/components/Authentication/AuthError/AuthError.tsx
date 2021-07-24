import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../../modules";
import { toast, ToastContainer, Flip } from "react-toastify";
import Exclamation from "../../../images/AuthError/Exclamation";
interface Error {
  id: string;
  msg: string;
}

const AuthError = (): JSX.Element => {
  const errors: Error[] | null = useSelector(
    (state: RootReducerType) => state.auth.errors
  );

  const showError = (): void => {
    {
      errors?.map((error, index) =>
        toast(() => (
          <section className="autherror-toast-body">
            <Exclamation />
            <span className="autherror-message">{error.msg}</span>
          </section>
        ))
      );
    }
  };

  return (
    <>
      {showError()}
      <ToastContainer
        className="autherror-toast-container"
        transition={Flip}
        autoClose={2000}
        hideProgressBar
        limit={3}
        newestOnTop={true}
        closeOnClick
      />
    </>
  );
};

export default AuthError;
