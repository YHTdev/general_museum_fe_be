import React from "react";
import { Dispatch, SetStateAction } from "react";
import { MenuIcon } from "../icons/menu";

interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const UiDrawerButton: React.FC<props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}>
      <MenuIcon className="w-auto h-10" />
    </button>
  );
};
