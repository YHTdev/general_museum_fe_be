import Link from "next/link";
import React from "react";
import { AppLogo } from "../../atoms/UiAppLogo";
import { motion } from "framer-motion";
import { DashbaordIcon } from "../../atoms/icons/dashboardIcon";
import { SettingIcon } from "../../atoms/icons/setting";
import { CategoryIcon } from "../../atoms/icons/categoryIcon";
import { BookIcon } from "../../atoms/icons/bookIcon";
import { settingProps } from "../AdminLayout";

interface props{
  setting?:settingProps
}
export const SideNav: React.FC<props> = ({setting}) => {
  return (
    <div className="flex flex-col w-full px-2 py-2 space-y-4 bg-slate-100">
      <AppLogo setting={setting} />
      <div className="flex flex-col space-y-2 divide-y divide-secondary/40">
        <Link href="/admin">
          <a>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              className="flex flex-row items-center content-center justify-start px-2 py-2 space-x-3">
              <DashbaordIcon className="w-6 h-6 text-primary text-opacity-70" />
              <span className="text-sm font-bold text-primary text-opacity-70">
                Dashboard
              </span>
            </motion.div>
          </a>
        </Link>
        <Link href="/admin/setting">
          <a>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              className="flex flex-row items-center content-center justify-start px-2 py-2 space-x-3">
              <SettingIcon className="w-6 h-6 text-primary text-opacity-70" />
              <span className="text-sm font-bold text-primary text-opacity-70">
                Setting
              </span>
            </motion.div>
          </a>
        </Link>
        <Link href="/admin/category">
          <a>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              className="flex flex-row items-center content-center justify-start px-2 py-2 space-x-3">
              <CategoryIcon className="w-6 h-6 text-primary text-opacity-70" />
              <span className="text-sm font-bold text-primary text-opacity-70">
                Categories
              </span>
            </motion.div>
          </a>
        </Link>
        <Link href="/admin/book">
          <a>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              className="flex flex-row items-center content-center justify-start px-2 py-2 space-x-3">
              <BookIcon className="w-6 h-6 text-primary text-opacity-70" />
              <span className="text-sm font-bold text-primary text-opacity-70">
                Books
              </span>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
};
