import React from "react";

import "./Card.scss";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
