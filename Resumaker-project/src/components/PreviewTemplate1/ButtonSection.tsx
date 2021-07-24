import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootReducerType } from "modules";
import ThemeButton from "components/CommonComponent/ThemeButton";
import { clearTemplate, uploadTemplate } from "modules/template/action";
import { useLocation } from "react-router-dom";

const ButtonSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuthenticated } = useSelector(
    (state: RootReducerType) => state.auth
  );

  const template = useSelector((state: RootReducerType) => state.template);

  const completeHandler = () => {
    console.log(template);
    dispatch(uploadTemplate(template));
    dispatch(clearTemplate());
  };

  return (
    <>
      {location.pathname === "/template-list/1/preview" && (
        <section className="preview-template1-button-container">
          <ThemeButton
            to="/template-list/1/edit"
            className="preview-template1-back-to-edit-button"
          >
            Back to Edit
          </ThemeButton>

          <ThemeButton
            to={isAuthenticated ? "/dashboard" : "/signup"}
            className="preview-template1-complete-button"
            onClick={completeHandler}
          >
            Complete
          </ThemeButton>
        </section>
      )}

      {location.pathname === "/template-list/1" && (
        <section className="template1-choose-button-container">
          <ThemeButton
            to="/template-list/1/edit"
            className="template1-choose-button"
          >
            Choose this template
          </ThemeButton>
        </section>
      )}
    </>
  );
};

export default ButtonSection;
