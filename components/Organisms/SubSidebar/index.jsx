import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context/appContext";
import { AdminData } from "../../Data";

const SubSidebar = ({ isSubSidebarOpen }) => {
  const { adminRoutes, adminRouteIndex, setAdminRouteIndex } = useAppContext();
  const router = useRouter();
  const filteredRoutes = adminRoutes.find(
    (route) => route.id === adminRouteIndex
  );

  const subRoutes = filteredRoutes.subRoutes.map((routes) => {
    const title = routes.title;
    const route = routes.route;
    return title, route;
  });

  return (
    <>
      {router.pathname.startsWith + `${filteredRoutes.route}` ? (
        <div
          className={`flex flex-col flex-none w-48 bg-slate-50 transform transition-all duration-500 ease-in-out ${
            isSubSidebarOpen ? `w-0` : ``
          }`}>
          <div className="p-5">
            <h1 className="text-lg leading-loose tracking-wide text-slate-900">
              {filteredRoutes.title}
            </h1>
          </div>
          <div className="flex-auto px-5 overflow-y-auto no-scrollbar">
            {filteredRoutes.subRoutes.map((route, i) => (
              <Link key={i} href={route.route}>
                <a
                  className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                    router.pathname === route.route ? "  text-yellow-500" : ""
                  }`}>
                  <div className="flex items-center ">{route.title}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* {router.pathname.startsWith + `/admin/settings` ? (
        <div
          className={`flex flex-col flex-none w-48 bg-slate-50 transform transition-all duration-500 ease-in-out ${
            isSubSidebarOpen ? `w-0` : ``
          }`}>
          <div className="p-5">
            <h1 className="text-lg leading-loose tracking-wide text-slate-900">
              Settings
            </h1>
          </div>

          <div className="flex-auto px-5 overflow-y-auto no-scrollbar">
            <Link href="/admin/settings/siteSettings">
              <a
                className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                  router.pathname === "/admin/settings/siteSettings"
                    ? "  text-yellow-500"
                    : ""
                }`}>
                <div className="flex items-center ">SiteSettings</div>
              </a>
            </Link>
            <Link href="/admin/settings/museumSettings">
              <a
                className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                  router.pathname === "/admin/settings/museumSettings"
                    ? "  text-yellow-500"
                    : ""
                }`}>
                <div className="flex items-center ">Museum Settings</div>
              </a>
            </Link>
          </div>
        </div>
      ) : null} */}

      {/* <div
        className={`flex flex-col flex-none w-48 bg-slate-50 transform transition-all duration-500 ease-in-out ${
          isSubSidebarOpen ? `w-0` : ``
        }`}>
        <div className="p-5">
          <h1 className="text-lg leading-loose tracking-wide text-slate-900">
            Settings
          </h1>
        </div>

        <div className="flex-auto px-5 overflow-y-auto no-scrollbar">
          <Link href="/admin/settings/siteSettings">
            <a
              className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                router.pathname === "/admin/settings/siteSettings"
                  ? "  text-yellow-500"
                  : ""
              }`}>
              <div className="flex items-center ">SiteSettings</div>
            </a>
          </Link>
          <Link href="/admin/settings/museumSettings">
            <a
              className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                router.pathname === "/admin/settings/museumSettings"
                  ? "  text-yellow-500"
                  : ""
              }`}>
              <div className="flex items-center ">Museum Settings</div>
            </a>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default SubSidebar;
