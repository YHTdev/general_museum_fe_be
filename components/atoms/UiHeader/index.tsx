import React from "react";
import { motion } from "framer-motion";
import { RightArrow } from "../icons/rightArrow";
import { LeftArrow } from "../icons/leftArrow";
import { settingProps } from "../../templates/AdminLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon } from "../icons/homeIcon";

interface props {
  title: string;
  setting?: settingProps;
}

export const UiHeader: React.FC<props> = ({ title, setting }) => {
  console.log("seetting -->", setting);

  const router = useRouter();
  const toBackHandler = () => {
    router.back();
  };
  return (
    <div className="flex items-center content-center justify-center w-full px-2 py-2 my-5 text-white border-b-2 rounded-lg border-slate-600">
      <motion.h4
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center content-center justify-center space-x-8">
        <button
          onClick={toBackHandler}
          className="px-4 py-2 bg-white rounded-lg ">
          <LeftArrow className="w-8 h-8 text-slate-900 " />
        </button>

        <span className="text-xl">{(setting && setting?.appNm) || title}</span>

        <Link href="/">
          <a>
            <div className="px-4 py-2 bg-white rounded-lg ">
              <HomeIcon className="w-8 h-8 text-slate-900 " />
            </div>
          </a>
        </Link>
      </motion.h4>
    </div>
  );
};
