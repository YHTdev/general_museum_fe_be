import Link from "next/link";
import { useRouter } from "next/router";

const RouterLink = ({ children, key, href, setAdminRouteIndex }) => {
  const router = useRouter();
  return (
    <Link key={key} href={href}>
      <a
        onClick={() => setAdminRouteIndex(href)}
        className={`block py-2  hover:text-yellow-500 text-slate-600 ${
          router.pathname === href ? " bg-slate-50 text-yellow-500" : ""
        }`}>
        <div className="flex items-center justify-center ">{children}</div>
      </a>
    </Link>
  );
};

export default RouterLink;
