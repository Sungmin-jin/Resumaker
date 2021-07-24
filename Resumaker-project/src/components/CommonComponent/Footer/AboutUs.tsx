import React, { useEffect } from "react";

import DeveloperInfo from "./DeveloperInfo";
import "./AboutUs.scss";

const developers = [
  {
    image: "https://source.unsplash.com/450x600/?nature,water",
    name: "Heeja(Erica) Jeong",
    position: "Project manager",
    email: "heejaerica@gmail.com",
  },
  {
    image: "https://source.unsplash.com/450x600/?nature,water",
    name: "Jayce Lee",
    position: "Tech Leader",
    email: "lkm4351@gmail.com",
  },
  {
    image: "https://source.unsplash.com/450x600/?nature,water",
    name: "Jaewhee Seo",
    position: "Developer",
    email: "jstylesss2@gmail.com",
  },
  {
    image: "https://source.unsplash.com/450x600/?nature,water",
    name: "Sungmin Jin",
    position: "Developer",
    email: "jasonjin1998@gmail.com",
  },
  {
    image: "https://source.unsplash.com/450x600/?nature,water",
    name: " GyeongMin Lee",
    position: "Developer",
    email: "tyler7688@gmail.com",
  },
  {
    image: "placeholder",
    name: "placeholder",
    position: "placeholder",
    email: "placeholder",
  },
];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-us">
      <h3 className="about-us-title">About us</h3>
      <article className="about-us-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </article>

      <article className="about-us-developers">
        {developers.map((developer, index) => {
          const { email, image, name, position } = developer;
          return (
            <DeveloperInfo
              key={index}
              email={email}
              image={image}
              name={name}
              position={position}
            />
          );
        })}
      </article>
    </section>
  );
};

export default AboutUs;
