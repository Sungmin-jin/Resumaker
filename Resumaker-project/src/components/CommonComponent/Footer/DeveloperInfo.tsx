import React from "react";

import Card from "../Card";
import "./DeveloperInfo.scss";

interface DeveloperInfoProps {
  image: string;
  name: string;
  position: string;
  email: string;
}

const DeveloperInfo = (props: DeveloperInfoProps) => {
  const { image, name, position, email } = props;
  return (
    <Card className="developer-info-card">
      <img
        className="developer-info-card-image"
        src={image}
        alt={`${name}-image`}
      />
      <span>{name}</span>
      <span>{position}</span>
      <span>{email}</span>
    </Card>
  );
};

export default DeveloperInfo;
