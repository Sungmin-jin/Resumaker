import React, { ReactText, useRef } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteTemplate } from "../../modules/template/action";
import ThemeButton from "../CommonComponent/ThemeButton";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "http://localhost:8080";

const MyTemplateThumbnail = ({ templateId }: { templateId: string }) => {
  const toastId = useRef<ReactText | null>(null);
  const dispatch = useDispatch();
  const copyLinkToClipboard = async (linkToCopy: string) => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      if (!toast.isActive(toastId.current!)) {
        toastId.current = toast(
          <div className="myTemplateThumbnail-toast-content">
            Copied link to clipboard
          </div>
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const DeleteTemplate = () => {
    dispatch(deleteTemplate(templateId));
  };

  return (
    <>
      <article className="myTemplateThumbnail-container">
        <div className="myTemplateThumbnail">
          <ToastContainer
            className="myTemplateThumbnail-toast-container"
            toastClassName="myTemplateThumbnail-toast"
            bodyClassName="myTemplateThumbnail-toast-body"
            position="top-center"
            transition={Flip}
            autoClose={2000}
            limit={1}
            hideProgressBar
            newestOnTop={true}
            closeOnClick
          />
          <img
            className="myTemplateThumbnail-image"
            src={
              "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            }
            alt="image"
          />

          <div className="myTemplateThumbnail-hover">
            <ThemeButton
              to={`/dashboard/${templateId}`}
              className="myTemplateThumbnail-hover-button"
            >
              View
            </ThemeButton>
            <button
              className="themeButton myTemplateThumbnail-hover-button"
              onClick={() =>
                copyLinkToClipboard(`${baseUrl}/dashboard/${templateId}`)
              }
            >
              Copy this link
            </button>
          </div>
        </div>
        <div className="myTemplateThumbnail-row">
          <ThemeButton
            to={`/dashboard/${templateId}/edit`}
            className="myTemplateThumbnail-row-button"
          >
            Edit
          </ThemeButton>
          <ThemeButton
            to={`/dashboard`}
            className="myTemplateThumbnail-row-button"
            myTemplateThumbnail-row-button
            onClick={DeleteTemplate}
          >
            Delete
          </ThemeButton>
        </div>

        <div className="horizontal-divider"></div>
      </article>
    </>
  );
};

export default MyTemplateThumbnail;
