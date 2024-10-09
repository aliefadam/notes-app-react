const FormBodyInputTitle = ({ title, onChange, charCount }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="title" className="text-primary poppins-medium">
          Judul
        </label>
        <div className="flex justify-end text-sm mt-1 text-primary">
          <span>{charCount}</span>
          <span>/</span>
          <span className="poppins-semibold">50</span>
        </div>
      </div>
      <input
        value={title}
        onChange={onChange}
        type="text"
        name="title"
        id="title"
        className="py-2 px-2 text-sm rounded-md outline-none border border-primary focus:border-2 focus:border-primary"
      />
    </div>
  );
};

export default FormBodyInputTitle;
