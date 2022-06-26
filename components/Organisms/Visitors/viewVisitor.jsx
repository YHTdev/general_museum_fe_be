import { useAppContext } from "../../../context/appContext";

const ViewVisitor = ({ singleVisitor }) => {
  const { name, nrc, phoneNumber, email, citizinship, address, qrSVG } =
    singleVisitor;
  const { data } = useAppContext();
  return (
    <>
      <div className="grid grid-cols-2 gap-6 text-slate-800">
        <div className="grid grid-cols-2 gap-6">
          <p>Name</p>
          <p>{name}</p>
          <p>NRC</p>
          <p>{nrc}</p>
          <p>Phone Number</p>
          <p>{phoneNumber}</p>
          <p>Email</p>
          <p>{email}</p>
          <p>Citizinship</p>
          <p>{citizinship}</p>
          <p>Address</p>
          <p>{address}</p>
        </div>

        <div className="w-48 mx-auto space-y-2 ">
          <img src={qrSVG} alt={name} className="w-32 h-32 " />
          <p>{name}</p>
          <p>{phoneNumber}</p>
        </div>
        <div className="p-5 border border-red-500 border-dashed rounded-lg">
          <div className="grid grid-cols-2 gap-6 ">
            <p>Created by</p>
            <p>data.name</p>
            <p>Created At</p>
            <p>data.createdAt</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVisitor;
