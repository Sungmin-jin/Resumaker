import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Link } from "react-scroll";

import Template1Nav from "components/CommonComponent/Template1Nav";
import ThemeButton from "components/CommonComponent/ThemeButton";
import Contact from "./Contact";
import facebook from "../../images/Template1/facebook.png";
import instagram from "../../images/Template1/instagram.png";
import linkedin from "../../images/Template1/linkedin.png";
import github from "../../images/Template1/github.png";
import { template1PageStyle } from "./PrintingTemplate1";

interface Tab {
  tab: string;
  title: string;
  image: string;
  description: string;
}

interface SocialMediaImageURL {
  url: string;
}

const socialMediaImage: SocialMediaImageURL[] = [
  { url: facebook },
  { url: instagram },
  { url: linkedin },
  { url: github },
];

const tabContents: Tab[] = [
  {
    tab: "Bookito",
    title: "Bookito Content",
    image:
      "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Colors are an important aspect of your brand's identity",
  },
  {
    tab: "Resumaker",
    title: "Resumaker Content",
    image:
      "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    tab: "Kreamin Studio",
    title: "Kreamin Studio Contents",
    image:
      "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description:
      "Ut euismod cursus ipsum eget hendrerit. Duis eget dictum tortor.",
  },
];

const Template1 = () => {
  const printingAreaRef = useRef<HTMLDivElement | null>(null);
  const [projectPrintingVersion, setProjectPrintingVersion] = useState<any>();
  const [isPrinting, setIsPrinting] = useState(false);

  const useTabs = (initialTab: number, allTab: Tab[]) => {
    const [index, setIndex] = useState<number>(initialTab);
    return {
      contentItem: allTab[index],
      contentChange: setIndex,
    };
  };

  const { contentItem, contentChange } = useTabs(0, tabContents);

  const beforeGetContentHandler = () => {
    setIsPrinting(true);
    setProjectPrintingVersion(
      <div className="template1-tabs-contents">
        {tabContents.map((tab) => {
          return (
            <>
              <h2 className="template1-tabs-title">{tab.tab}</h2>
              <div className="template1-tabs-image-description-container">
                <figure className="tabs-image-container">
                  <img src={tab.image} className="template1-tabs-image" />
                </figure>
                <p className="template1-tabs-description">{tab.description}</p>
              </div>
            </>
          );
        })}
      </div>
    );
    return Promise.resolve();
  };

  const afterPrintHandler = () => {
    setIsPrinting(false);
    setProjectPrintingVersion(null);
  };

  return (
    <>
      <div
        ref={printingAreaRef}
        className="print-container"
        style={{ margin: "0", padding: "0" }}
      >
        <header className="template1-header">
          <div className="template1-header-texts">
            <h1>
              Hello I'm <span className="name-highlight">Gyeong-min</span>
            </h1>
            <h3>I'm a full-stack web developer</h3>
          </div>
          <div className="template1-header-button">
            <Link className="header-button" to="about" smooth={true}>
              View my Info
            </Link>
          </div>
        </header>

        <section className="template1-nav" id="template1nav">
          <nav>
            <ul className="template1-nav-ul">
              <Template1Nav />
            </ul>
          </nav>
        </section>

        <section className="template1-about" id="about">
          <div className="template1-about-header">
            <h1 className="about-header">about</h1>
          </div>
          <div className="template1-about-picture">
            <img
              className="about-picture"
              src="https://images.unsplash.com/photo-1510459641407-c6f2a047ce89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="aboutPicture"
            />
          </div>
          <div className="template1-about-info">
            <h2 className="template1-about-info-title">Who's this guy</h2>
            <p className="template1-about-info-description">
              I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
              serious passion for UI effects, animcations and creating
              intuitive, dynamic user experiences. Let's make something special
            </p>
          </div>
        </section>

        <div className="page-break" />
        <section className="template1-project" id="project">
          <h1 className="template1-project-header">Projects</h1>
          {!isPrinting && (
            <>
              <div className="template1-tabs-container">
                {tabContents.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => contentChange(index)}
                    className="template1-tabs-btn"
                  >
                    {tab.tab}
                  </button>
                ))}
              </div>
              <div className="template1-tabs-contents">
                <h2 className="template1-tabs-title">{contentItem.title}</h2>
                <div className="template1-tabs-image-description-container">
                  <figure className="tabs-image-container">
                    <img
                      src={contentItem.image}
                      className="template1-tabs-image"
                    />
                  </figure>
                  <p className="template1-tabs-description">
                    {contentItem.description}
                  </p>
                </div>
              </div>
            </>
          )}
          {isPrinting && projectPrintingVersion}
        </section>

        <div className="page-break" />
        <section className="template1-work-exp" id="experience">
          <h1 className="template1-work-exp-header">Work Experience</h1>
          <div className="template1-work-exp-flex-box">
            <div className="template1-work-exp-contents">
              <h3> 2019.01 ~ present </h3>
              <h2>BCIT</h2>
              <h3>CST</h3>
              <p>
                Rick is a genius scientist whose alcoholism and reckless,
                nihilistic behavior are a source of concern for his family.
              </p>
            </div>
            <div className="template1-work-exp-contents">
              <h3> 2019.01 ~ present </h3>
              <h2>BCIT</h2>
              <h3>CST</h3>
              <p>
                Rick is a genius scientist whose alcoholism and reckless,
                nihilistic behavior are a source of concern for his family.
              </p>
            </div>
            <div className="template1-work-exp-contents">
              <h3> 2019.01 ~ present </h3>
              <h2>BCIT</h2>
              <h3>CST</h3>
              <p>
                Rick is a genius scientist whose alcoholism and reckless,
                nihilistic behavior are a source of concern for his family.
              </p>
            </div>
          </div>
        </section>

        <div className="page-break" />
        <section className="template1-education" id="education">
          <h1 className="template1-education-header">Education</h1>
          <div className="template1-education-flex-box">
            <div className="template1-education-contents">
              <h3> 2019.01 ~ present </h3>
              <h2>BCIT</h2>
              <h3>CST</h3>
              <p>
                Rick is a genius scientist whose alcoholism and reckless,
                nihilistic behavior are a source of concern for his family.
              </p>
            </div>
            <div className="template1-education-contents">
              <h3> 2019.01 ~ present </h3>
              <h2>BCIT</h2>
              <h3>CST</h3>
              <p>
                Rick is a genius scientist whose alcoholism and reckless,
                nihilistic behavior are a source of concern for his family.
              </p>
            </div>
          </div>
        </section>

        <section className="template1-additional-info" id="additional info">
          <h1 className="template1-additional-info-header">
            additional info(optional text area)
          </h1>
          <h3 className="template1-additional-info-sub-header">
            e.g CERTIFICATE, REFERENCE, ETC
          </h3>
        </section>

        <Contact />

        <section className="template1-social-media">
          {socialMediaImage.map((image, index) => (
            <div key={index} className="template1-social-media-image-container">
              <img className="template1-social-media-image" src={image.url} />
            </div>
          ))}
        </section>
      </div>

      <section className="template1-choose-button-container">
        <ThemeButton
          to="/template-list/1/edit"
          className="template1-choose-button"
        >
          Choose this template
        </ThemeButton>
        <ReactToPrint
          onBeforeGetContent={beforeGetContentHandler}
          trigger={() => (
            <button className="themeButton download-pdf-button">
              Download PDF
            </button>
          )}
          content={() => printingAreaRef.current}
          pageStyle={template1PageStyle}
          onAfterPrint={afterPrintHandler}
        />
      </section>
    </>
  );
};

export default Template1;
