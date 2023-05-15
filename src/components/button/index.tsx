"use client"; // this is a client component 👈🏽
import { Button } from "@tremor/react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonComponent = ({onClick, children}: ButtonProps) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);

export default ButtonComponent;