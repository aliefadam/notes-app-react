import NotesTabItem from "./NotesTabItem";

const NotesTab = ({ activePage, onChangePage }) => {
  return (
    <div className="border-b border-b-primary mt-10 flex items-center">
      <NotesTabItem
        onChangePage={onChangePage}
        icon={"fa-notes"}
        text={"Utama"}
        activePage={activePage}
      />
      <NotesTabItem
        onChangePage={onChangePage}
        icon={"fa-box-archive"}
        text={"Diarsipkan"}
        activePage={activePage}
      />
    </div>
  );
};

export default NotesTab;
