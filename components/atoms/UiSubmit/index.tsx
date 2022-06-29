import React from "react";
interface props{
    title:string
}
export const UiSubmit:React.FC<props> = ({ title = "submit" }) => {
  return (
    <div className="px-2 py-2 w-full">
      <button
        type="submit"
        className="w-full rounded-sm  flex justify-center items-center content-center px-2 py-2 bg-secondary text-inverse hover:bg-secondary"
      >
        {title}
      </button>
    </div>
  );
};