import Image from "next/image";
import Link from "next/link";
import Iconx from "../../Atoms/Icons/iconx";
import YoonHanTharLogoOnly from "../../../public/assets/images/logo/YoonHanTharLogoOnly.png";
import { useRouter } from "next/router";
import { useState } from "react";
import AccountAction from "./AccountAction";
import { useAppContext } from "../../../context/appContext";
import RouterLink from "../../Atoms/RouterLink";

const Sidebar = ({}) => {
  const { adminRoutes, setAdminRouteIndex } = useAppContext();
  const [isButtonHover, setIsButtonHover] = useState(false);
  const router = useRouter();

  const accountButtonhandler = () => {
    setIsButtonHover(!isButtonHover);
  };
  const mouseLeavehandler = () => {
    setIsButtonHover(!isButtonHover);
  };

  return (
    <div className="flex flex-col flex-none w-20 bg-slate-200">
      <div className="flex-none w-full">
        <Image src={YoonHanTharLogoOnly} alt="YoonHanThar" />
      </div>

      <div className="flex-auto overflow-y-auto no-scrollbar">
        <div className="">
          <div className="flex flex-col mx-auto ">
            {adminRoutes.map((adminRoutes) => (
              // <RouterLink
              //   key={adminRoutes.id}
              //   href={adminRoutes.route}
              //   setAdminRouteIndex={setAdminRouteIndex}>
              //   <Iconx icon={adminRoutes.icon} />
              // </RouterLink>
              <Link key={adminRoutes.id} href={adminRoutes.route}>
                <a
                  onClick={() => setAdminRouteIndex(adminRoutes.id)}
                  className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                    router.pathname === adminRoutes.route
                      ? " bg-slate-50 text-yellow-500"
                      : ""
                  }`}>
                  <div className="flex items-center justify-center ">
                    <Iconx icon={adminRoutes.icon} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-6 ">
        <AccountAction
          onMouseEnter={accountButtonhandler}
          // onMouseLeave={mouseLeavehandler}
          isButtonHover={isButtonHover}
        />
      </div>
    </div>
  );
};

export default Sidebar;
