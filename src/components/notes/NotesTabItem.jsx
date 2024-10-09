const NotesTabItem = ({ icon, text, activePage, onChangePage }) => {
  const isActivePage = () => {
    return text == activePage
      ? "bg-primary bg-opacity-90 text-white"
      : "bg-white text-primary hover:bg-primary hover:bg-opacity-10";
  };

  return (
    <button
      className={`py-2.5 px-5 flex items-center rounded-t-md gap-2 duration-200 ${isActivePage()}`}
      onClick={onChangePage}
      data-page={text}
    >
      <i className={`fa-regular ${icon}`} data-page={text}></i>
      {text}
    </button>
  );
};

export default NotesTabItem;
