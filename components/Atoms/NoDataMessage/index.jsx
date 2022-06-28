import Iconx from "../Icons/iconx";

const NoDataMessage = () => {
  return (
    <div className="flex items-center p-5 mt-10 space-x-5 text-red-500 bg-white border border-red-600 rounded-lg shadow-lg">
      <div className="w-10 ">
        <Iconx icon={`ExclamationIcon`} className={`w-10 h-10 shrink-0`} />
      </div>
      <div className="flex-auto space-y-3">
        <h1 className="text-xl font-light">You Have No Data</h1>
        <p>Create Data First</p>
      </div>
    </div>
  );
};

export default NoDataMessage;
