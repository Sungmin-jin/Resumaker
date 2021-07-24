import React, { useEffect, useRef } from "react";
import TemplateThumbnail from "./TemplateThumbnail";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../modules";
import { loadAllTemplates } from "../../modules/allTemplate/actions";
import { Template } from "interfaces";

const TemplateListView = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const allTemplates = useSelector((state: RootReducerType) => state.allTemplate.data);

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dispatch(loadAllTemplates());
    }
  }, options);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current!);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [allTemplates]);

  const templateThumbnails = allTemplates.map((template: Template) => {
    const { templateId, templateName, thumbnailImages } = template;
    return (
      <TemplateThumbnail
        key={templateId}
        templateId={templateId}
        templateName={templateName}
        thumbnailImages={thumbnailImages}
      />
    );
  });

  return (
    <section className="templateListView-container">
      <header className="templateListView-header">Make your own resume portfolio</header>
      <section className="templateListView-section">
        {templateThumbnails}
        <div ref={ref} className="templateListView-section-observer"></div>
      </section>
    </section>
  );
};

export default TemplateListView;
