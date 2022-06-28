import slugify from "slugify";
import apiCall from "../../../utils/apiCall";

const EditMuseum = ({ isModalOpen, setIsModalOpen, formData, setFormData }) => {
  const editHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await apiCall.put(
        `/museum/museumLists/${formData.id}`,
        formData
      );
      if (res.status === 200) {
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log("Museum Createion Error", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-6 text-slate-800">
        <h1 className="col-span-2 text-sm font-semibold text-red-500">
          ** Please only fill with English **
        </h1>
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
                slug: slugify(e.target.value, { lower: true }),
              });
            }}
          />
        </div>

        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="slug">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="w-full form-input"
            disabled
            placeholder="Read Only!!"
            value={formData.slug}
          />
        </div>

        <div className="">
          <label className="block mb-2 text-sm font-medium" htmlFor="location">
            Location
          </label>
          <select
            name="location"
            id="location"
            className="w-full form-select"
            value={formData.location}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}>
            <option value="" selected>
              --- Select Location ---
            </option>
            <option value="Yangon">Yangon</option>
            <option value="Mandalay">Mandalay</option>
            <option value="NayPyiTaw">Nay Pyi Taw</option>
          </select>
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
          onClick={editHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Update
        </button>
      </div>
    </>
  );
};

export default EditMuseum;
