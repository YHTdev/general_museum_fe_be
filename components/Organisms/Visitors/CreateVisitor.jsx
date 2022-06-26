import apiCall from "../../../utils/apiCall";

const CreateVisitor = ({
  formData,
  setFormData,
  isModalOpen,
  setIsModalOpen,
  isLocal,
  setIsLocal,
}) => {
  const createVisitorHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await apiCall.post("/visitor/createVisitor", formData);
      if (res.status === 200) {
        setIsModalOpen(!isModalOpen);
        console.log("Visitor Creation Success", res.data);
      }
    } catch (error) {
      console.log("Visitor Creatation Error ==>", error);
    }
  };

  const localhandler = () => {
    setIsLocal(!isLocal);
    console.log("isLocal =>", isLocal);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-6 text-slate-800">
        <h1 className="col-span-2 text-sm font-semibold text-red-500">
          ** Please only fill with English **
        </h1>
        <div className="inline-flex col-span-2 text-sm font-semibold ">
          <button
            className={`${
              isLocal ? " bg-yellow-500 text-slate-100" : " text-red-400"
            } w-40 py-2 text-center border border-r-0 border-yellow-500 rounded-l-lg`}>
            Local
          </button>
          <button
            onClick={() => localhandler()}
            className={`${
              isLocal ? " bg-yellow-500 text-slate-100" : ""
            } w-40 py-2 text-center border border-yellow-500 rounded-r-lg`}>
            Foreign
          </button>
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full form-input"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full form-input"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full form-input"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="nrc">
            NRC
          </label>
          <input
            type="text"
            name="nrc"
            id="nrc"
            className="w-full form-input"
            value={formData.nrc}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="address">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            className="w-full form-textarea"
            value={formData.address}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 space-x-5">
        <button
          onClick={createVisitorHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Add
        </button>
      </div>
    </>
  );
};

export default CreateVisitor;
