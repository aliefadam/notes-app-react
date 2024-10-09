const NotesListButton = ({
  id,
  text,
  icon,
  onShowDetail,
  onArchive,
  onDelete,
}) => {
  const getHoverColor = () => {
    if (text == "Detail") {
      return "hover:bg-primary hover:text-white hover:border-transparent";
    } else if (text == "Arsipkan" || text == "Lepas") {
      return "hover:bg-secondary hover:text-primary hover:border-secondary";
    } else {
      return "hover:bg-red-500 hover:text-white hover:border-transparent";
    }
  };

  const getAction = (event) => {
    if (text == "Detail") {
      onShowDetail(event);
    } else if (text == "Arsipkan" || text == "Lepas") {
      onArchive(event);
    } else {
      onDelete(event);
    }
  };

  return (
    <button
      className={`flex justify-center items-center gap-1.5 border border-primary py-1.5 text-sm rounded-md ${getHoverColor()} duration-200 flex-[1]`}
      onClick={(event) => getAction(event)}
      data-id={id}
    >
      <i className={`fa-regular ${icon}`} data-id={id}></i>
      {text}
    </button>
  );
};

export default NotesListButton;
