import React from "react";
import { showFormattedDate } from "../../utils";

const NotesDetailBody = ({ title, body, createdAt }) => {
  return (
    <div className="px-5 py-4 flex flex-col gap-3 min-h-[50vh] max-h-[50vh] overflow-y-auto">
      <div className="flex flex-col">
        <span className="text-sm poppins-semibold text-primary">
          Dibuat pada
        </span>
        <span className="text-lg">{showFormattedDate(createdAt)}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm poppins-semibold text-primary">Judul</span>
        <span className="text-lg">{title}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm poppins-semibold text-primary">Isi</span>
        <span className="text-lg leading-[23px] text-[15px]">{body}</span>
      </div>
    </div>
  );
};

export default NotesDetailBody;
