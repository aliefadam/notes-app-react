import NotesListItem from "./NotesListItem";

const NotesList = ({
  activePage,
  notes,
  searchedNotes = [],
  onShowDetail,
  onArchive,
  onDelete,
}) => {
  let filterdNotes = [];
  if (searchedNotes.length > 0) {
    filterdNotes = searchedNotes;
  } else {
    filterdNotes =
      activePage == "Utama"
        ? notes.filter((note) => !note.archived)
        : notes.filter((note) => note.archived);
  }

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-8">
      {filterdNotes.map((note, i) => {
        return (
          <NotesListItem
            key={i}
            {...note}
            onShowDetail={onShowDetail}
            onArchive={onArchive}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
