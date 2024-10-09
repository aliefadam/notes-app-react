const FormBodyInputBody = ({ body, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="body" className="text-primary poppins-medium">
        Isi
      </label>
      <textarea
        value={body}
        onChange={onChange}
        type="text"
        name="body"
        id="body"
        className="py-2 px-2 h-[100px] text-sm resize-none rounded-md outline-none border border-primary focus:border-2 focus:border-primary"
      ></textarea>
    </div>
  );
};

export default FormBodyInputBody;
