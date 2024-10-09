const NotesDetailHeader = ({ onCloseDetail }) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 border-b border-primary">
      <h1 className="poppins-semibold text-lg">Detail Catatan</h1>
      <button
        className="hover:bg-gray-200 size-[35px] duration-200 rounded-md"
        onClick={onCloseDetail}
      >
        <i className="fa-regular fa-xmark text-lg"></i>
      </button>
    </div>
  );
};

export default NotesDetailHeader;
