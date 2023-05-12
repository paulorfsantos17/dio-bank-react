import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";
interface IButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick }: IButton) => {
  return (
    <ButtonChakra
      onClick={onClick}
      size='lg'
      minWidth='100%'
      backgroundColor='#9413dc'
      _hover={{ bgColor: "#9413dc77" }}
      transitionDuration='.5s'>
      Entrar
    </ButtonChakra>
  );
};
