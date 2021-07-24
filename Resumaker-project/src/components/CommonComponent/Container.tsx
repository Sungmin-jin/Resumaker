import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return <main className="container">{children}</main>;
};

export default Container;
