import { useState } from "react";
import Form from "./components/form/Form";
import Info from "./components/info/Info";
import NotesHeading from "./components/notes/NotesHeading";
import NotesList from "./components/notes/NotesList";
import NotesTab from "./components/notes/NotesTab";
import {
  getInitialData,
  showConfirmationDelete,
  showNotification,
} from "./utils";
import NotesDetail from "./components/notes/NotesDetail";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [detailNotes, setDetailNotes] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [activePage, setActivePage] = useState("Utama");
  const totalNotes = notes.length;
  const totalArchived = notes.filter((note) => note.archived).length;

  const onChangeTitle = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
    }
  };

  const onChangeBody = (event) => {
    const newBody = event.target.value;
    setBody(newBody);
  };

  const addNewNotes = (event) => {
    event.preventDefault();
    const newNotes = [
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ];
    if (title == "" || body == "") {
      showNotification({
        title: "Gagal",
        icon: "error",
        text: "Pastikan Judul dan Isi tidak kosong",
      });
      return;
    }
    showNotification({
      title: "Sukses",
      icon: "success",
      text: "Menambahkan Catatan",
    });

    setNotes(newNotes);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  const onShowDetail = (event) => {
    const id = event.target.getAttribute("data-id");
    const { createdAt, title, body } = notes.find((note) => note.id == id);

    setIsShowDetail(true);
    setDetailNotes({
      createdAt: createdAt,
      title: title,
      body: body,
    });
  };

  const closeDetail = () => {
    setIsShowDetail(false);
  };

  const onArchive = (event) => {
    const id = event.target.getAttribute("data-id");

    const newNotes = notes.map((note) => {
      if (note.id == id) {
        note.archived = !note.archived;
      }
      return note;
    });

    setNotes(newNotes);
  };

  const onDelete = (event) => {
    const id = event.target.getAttribute("data-id");
    const newNotes = notes.filter((note) => note.id != id);

    showConfirmationDelete().then((result) => {
      if (result.isConfirmed) {
        showNotification({
          title: "Sukses",
          text: "Berhasil Menghapus Data",
          icon: "success",
        });
        setNotes(newNotes);
      }
    });
  };

  const changePage = (event) => {
    const newPage = event.target.getAttribute("data-page");
    setActivePage(newPage);
  };

  const onSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const newNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword) ||
        note.body.toLowerCase().includes(keyword)
    );
    if (keyword == "") {
      setNotes(newNotes);
      setSearchedNotes([]);
    } else {
      setSearchedNotes(newNotes);
    }
  };

  return (
    <main className="lg:p-8 p-5">
      <div className="flex lg:flex-row flex-col gap-10">
        <Form
          body={body}
          title={title}
          charCount={title.length}
          onSubmit={addNewNotes}
          onChangeBody={onChangeBody}
          onChangeTitle={onChangeTitle}
        />
        <Info totalNotes={totalNotes} totalArchived={totalArchived} />
      </div>

      <div className="mt-12">
        <NotesHeading onSearch={onSearch} />
        <NotesTab activePage={activePage} onChangePage={changePage} />
        <NotesList
          activePage={activePage}
          notes={notes}
          searchedNotes={searchedNotes}
          onShowDetail={onShowDetail}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      </div>

      {isShowDetail && (
        <NotesDetail
          title={detailNotes.title}
          body={detailNotes.body}
          createdAt={detailNotes.createdAt}
          onCloseDetail={closeDetail}
        />
      )}
    </main>
  );
};

export default App;
