import * as HIcons from "@heroicons/react/outline";

const Iconx = ({ icon, className }) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[icon];
  return (
    <>
      <TheIcon
        className={className ? `${className}` : " w-7 h-7 shrink-0"}
        aria-hidden="true"
      />
    </>
  );
};

export default Iconx;
