const NotesHeadingSearch = ({ onSearch }) => {
  return (
    <div className="mt-5 lg:w-1/2 w-full rounded-lg flex shadow-sm border overflow-hidden border-primary">
      <i className="fa-regular fa-magnifying-glass w-12 h-[45px] bg-primary text-white flex justify-center items-center"></i>
      <input
        onChange={onSearch}
        type="text"
        placeholder="Cari Catatan..."
        className="py-2.5 outline-none w-full px-3"
      />
    </div>
  );
};

export default NotesHeadingSearch;
