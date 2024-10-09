import NotesDetailBody from "./NotesDetailBody";
import NotesDetailHeader from "./NotesDetailHeader";

const NotesDetail = ({ title, body, createdAt, onCloseDetail }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center"
      onClick={onCloseDetail}
    >
      <div className="lg:w-1/2 w-[90%] bg-white rounded-xl">
        <NotesDetailHeader onCloseDetail={onCloseDetail} />
        <NotesDetailBody title={title} body={body} createdAt={createdAt} />
      </div>
    </div>
  );
};

export default NotesDetail;
