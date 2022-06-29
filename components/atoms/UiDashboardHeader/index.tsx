import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BookIcon } from "../icons/bookIcon";
import { CategoryIcon } from "../icons/categoryIcon";
import { HomeIcon } from "../icons/homeIcon";
import { SettingIcon } from "../icons/setting";

export const UiDashboardHeader: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center content-center justify-center w-full px-2 py-4 bg-inverse text-secondary">
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/admin">
              <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <HomeIcon className="w-6 h-6 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Dashboard
                </span>
              </a>
            </Link>
          </li>
          <li>
            {pathname.includes("setting") && (
              <Link href="/admin/setting">
                <a className="flex items-center">
                  <div className="flex items-center">
                    <SettingIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Setting
                    </span>
                  </div>
                </a>
              </Link>
            )}
            {pathname.includes("book") && (
              <Link href="/admin/book">
                <a className="flex items-center">
                  <div className="flex items-center">
                    <BookIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Book
                    </span>
                  </div>
                </a>
              </Link>
            )}
            {pathname.includes("category") && (
              <Link href="/admin/category">
                <a className="flex items-center">
                  <div className="flex items-center">
                    <CategoryIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Category
                    </span>
                  </div>
                </a>
              </Link>
            )}
          </li>
          
        </ol>
      </nav>
    </div>
  );
};
