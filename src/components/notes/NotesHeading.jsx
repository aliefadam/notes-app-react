import NotesHeadingSearch from "./NotesHeadingSearch";
import NotesHeadingTitle from "./NotesHeadingTitle";

const NotesHeading = ({ onSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <NotesHeadingTitle />
      <NotesHeadingSearch onSearch={onSearch} />
    </div>
  );
};

export default NotesHeading;
