const UiInput = ({
  formData,
  setFormData,
  name,
  id,
  placeHolder,
  type,
  disabled = false,
  required = true,
}) => {
  return (
    <div className="w-full px-2 py-2">
      <input
        type={type}
        value={formData[name]}
        id={id}
        name={name}
        placeholder={placeHolder}
        required={required}
        disabled={disabled}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        className="w-full px-2 py-2 border rounded-sm appearance-none focus:outline-none border-slate-200 focus:border-indigo-400 focus:bg-white hover:border-indigo-400"
      />
    </div>
    // <input
    //   type={type}
    //   value={formData[name]}
    //   id={id}
    //   name={name}
    //   placeholder={placeHolder}
    //   required={required}
    //   disabled={disabled}
    //   className="w-full form-input"
    //   //   onChange={(e) => {
    //   //     setFormData({
    //   //       ...formData,
    //   //       [e.target.name]: e.target.value,
    //   //       slug: slugify(e.target.value, { lower: true }),
    //   //     });
    //   //   }}
    //   onChange={(e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   }}
    // />
  );
};

export default UiInput;
