import { useState } from "react";
import slugify from "slugify";
import apiCall from "../../../utils/apiCall";

const CreateGallery = ({
  museumLists,
  formData,
  setFormData,
  isModalOpen,
  setIsModalOpen,
}) => {
  const createGalleryHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await apiCall.post("/gallery/createGallery", formData);
      if (res.status === 200) {
        setIsModalOpen(false);
        console.log("success", res.data);
      }
    } catch (error) {
      console.log("Gallery Createion Error", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-6 text-slate-800">
        <h1 className="col-span-2 text-sm font-semibold text-red-500">
          ** Please only fill with English **
        </h1>
        <div className="">
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="galleryName">
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
          <label
            className="block mb-2 text-sm font-medium"
            htmlFor="gallerySlug">
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
          <label className="block mb-2 text-sm font-medium" htmlFor="museumId">
            Museum
          </label>
          <select
            name="museumId"
            id="museumId"
            className="w-full form-select"
            value={formData.museumId}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}>
            <option>--- Select Museum ---</option>
            {museumLists.map((museum, i) => (
              <option key={i} value={museum.id}>
                {museum.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 space-x-5">
        <button
          onClick={createGalleryHandler}
          className="py-2 bg-yellow-500 rounded-lg shadow-lg px-7 text-slate-200">
          Add
        </button>
      </div>
    </>
  );
};

export default CreateGallery;
