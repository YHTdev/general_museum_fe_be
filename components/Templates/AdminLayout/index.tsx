import React, { useState } from "react";
import Iconx from "../../Atoms/Icons/iconx";
import { AdminData } from "../../Data";
import Sidebar from "../../Organisms/Sidebar";
import SubSidebar from "../../Organisms/SubSidebar";

// export default AdminLayout;

export const AdminTitle = ({ children, className }) => {
  return (
    <div
      className={`${
        className || ""
      } text-lg leading-loose tracking-wide text-slate-900`}>
      {children}
    </div>
  );
};
export const AdminBody = ({ children }) => {
  return (
    <div className="flex-auto overflow-y-auto no-scrollbar">
      <div className="mt-5">{children}</div>
    </div>
  );
};

const AdminLayout = ({ children }) => {
  const n = 60; // Or something else
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const sidebarLinksData = AdminData.SidebarRoutes;

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <SubSidebar
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
      />
      <div className="relative z-20 flex flex-col flex-auto px-5 pt-5 bg-slate-100 rounded-xl">
        <button
          onClick={() => setIsSubSidebarOpen(!isSubSidebarOpen)}
          className="absolute p-2 bg-yellow-500 rounded-full shadow-xl top-5 -left-4">
          {isSubSidebarOpen ? (
            <Iconx
              icon="ChevronDoubleRightIcon"
              className={` w-3 h-3 text-slate-50`}
            />
          ) : (
            <Iconx
              icon="ChevronDoubleLeftIcon"
              className={` w-3 h-3 text-slate-50`}
            />
          )}
        </button>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
