import { useRouter } from "next/router";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { PowerIcon } from "../../atoms/icons/powerIcon";
import { AppLogo } from "../../atoms/UiAppLogo";
import { UiDrawerButton } from "../../atoms/UiDrawerButton";

interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const NavBar: React.FC<props> = ({ isOpen, setIsOpen }) => {
  const { push } = useRouter();
  const Logout = () => {
    sessionStorage.clear();
    push("/");
  };
  return (
    <div className="w-full px-2 py-2 bg-primary text-inverse">
      <div className="flex items-center content-center justify-between w-full mx-auto max-w-screen-2xl">
        <div className="flex items-center content-center justify-start space-x-4">
          <UiDrawerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {!isOpen && <AppLogo />}
        </div>

        <button
          onClick={() => {
            Logout();
          }}
          className="flex items-center content-center justify-center space-x-2">
          <PowerIcon className="w-auto h-6" />
          <span>ထွက်ရန်</span>
        </button>
      </div>
    </div>
  );
};
