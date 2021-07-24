import React from "react";
import facebook from "../../images/Template1/facebook.png";
import instagram from "../../images/Template1/instagram.png";
import linkedin from "../../images/Template1/linkedin.png";
import github from "../../images/Template1/github.png";
import { PersonalInfo } from "modules/template/interfaces";
interface socialInterface {
  [sns: string]: string;
}

const imageMapping: socialInterface = {
  facebook: facebook,
  instagram: instagram,
  github: github,
  linkedin: linkedin,
};

interface Props {
  personalInfo: PersonalInfo[] | undefined;
}

const SocialMedia = ({ personalInfo }: Props) => {
  let socialMediaArray = [];
  if (personalInfo!.length !== 0) {
    for (const [key, value] of Object.entries(personalInfo![0])) {
      if (
        key === "github" ||
        key === "linkedin" ||
        key === "instagram" ||
        key === "facebook"
      ) {
        socialMediaArray.push({ [key]: value });
      }
    }
  }

  return (
    <section className="template1-social-media">
      {socialMediaArray.map(
        (socialMedia) =>
          Object.values(socialMedia)[0] !== "" && (
            <div className="template1-social-media-image-container">
              <img
                className="template1-social-media-image"
                src={imageMapping[Object.keys(socialMedia)[0]]}
              />
            </div>
          )
      )}
    </section>
  );
};

export default SocialMedia;
