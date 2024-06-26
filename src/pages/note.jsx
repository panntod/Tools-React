import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../css/note.css";

function Note() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    const newNote = {
      id: nanoid(),
      color: getRandomColor(),
      text: "",
    };
    setNotes([...notes, newNote]);
  }

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  function getRandomColor() {
    const colors = [
      "bg-pink-200",
      "bg-purple-200",
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-red-200",
      "bg-indigo-200",
      "bg-gray-200",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  function adjustTextareaHeight(event, index) {
    const textarea = event.target;
    textarea.style.height = "auto";
    const computedHeight = Math.min(textarea.scrollHeight, 300);
    textarea.style.height = `${computedHeight}px`;

    const updatedNotes = [...notes];
    updatedNotes[index].text = textarea.value;
    setNotes(updatedNotes);
  }

  // clear all notes
  const clearAll = () => {
    setNotes([]);
  };

  return (
    <div className="notes-wrapper min-h-screen">
      <div className="note-container">
        <div className="notes">
          <h1 className="text-2xl font-bold mb-4">Notes</h1>
          <p className="text-lg">
            You can add notes by clicking this green button, the notes will
            automaticly saved. You can also delete the notes one by one by
            clicking the trash icon in each note or just clear all the notes by
            clicking the red button below.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <button
              className="bg-green-400 text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-green-600"
              onClick={() => addNote()}
            >
              <i className="fa fa-solid fa-plus"></i>
              <p>New Note</p>
            </button>
            <button
              className="bg-red-400 text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-red-600"
              onClick={() => clearAll()}
            >
              <i className="fa fa-solid fa-trash"></i>
              <p>Clear Notes</p>
            </button>
          </div>
        </div>
        <div>
          <div className="notes">
            <h1 className="text-2xl font-bold mb-4">Note List</h1>
          </div>
          {notes.length === 0 ? (
            <div className="w-full mb-8 bg-slate-300 rounded-md pt-5 pb-4 dark:bg-gray-600">
              <p className="text-black dark:text-white text-center">
                Tidak Ada Data
              </p>
            </div>
          ) : (
            <div>
              {notes.map((note, index) => (
                <div
                  key={index}
                  className={`${note.color} `}
                  style={{
                    borderRadius: 6 + "px",
                    padding: 0.4 + "rem",
                    marginBottom: 10 + "px",
                  }}
                >
                  <div className="form-note">
                    <textarea
                      value={note.text}
                      className="textarea-notes"
                      onChange={(e) => {
                        const updatedNotes = [...notes];
                        updatedNotes[index].text = e.target.value;
                        setNotes(updatedNotes);
                        adjustTextareaHeight(e, index);
                      }}
                      placeholder="Write your note here..."
                    ></textarea>
                    <div>
                      <button
                        onClick={() => deleteNote(index)}
                        className="ms-4 bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-3 rounded"
                      >
                        <i className="fa fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
