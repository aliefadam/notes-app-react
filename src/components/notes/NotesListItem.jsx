import { limitString, showFormattedDate } from "../../utils";
import NotesListButton from "./NotesListButton";

const NotesListItem = ({
  id,
  createdAt,
  title,
  body,
  archived,
  onShowDetail,
  onArchive,
  onDelete,
}) => {
  return (
    <div className="border border-primary shadow-md p-4 rounded-lg">
      <p className="text-sm poppins-medium text-gray-500">
        {showFormattedDate(createdAt)}
      </p>
      <h1 className="text-xl poppins-bold text-primary mt-1">{title}</h1>
      <p className="leading-[22px] mt-0.5 h-[40px] text-[15px]">
        {limitString(body)}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <NotesListButton
          onShowDetail={onShowDetail}
          id={id}
          icon={"fa-circle-info"}
          text={"Detail"}
        />
        <NotesListButton
          id={id}
          onArchive={onArchive}
          icon={archived ? "fa-inbox-out" : "fa-box-archive"}
          text={archived ? "Lepas" : "Arsipkan"}
        />
        <NotesListButton
          onDelete={onDelete}
          id={id}
          icon={"fa-trash"}
          text={"Hapus"}
        />
      </div>
    </div>
  );
};

export default NotesListItem;
