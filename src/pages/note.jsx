import React, { useState, useEffect } from "react";
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
    const computedHeight = Math.min(textarea.scrollHeight, 300); // Limit to 300px
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
    <div className="container" style={{ minHeight: "90vh" }}>
      <div className="note-container">
        <div className="notes">
          <h1>Notes</h1>
          <p>
            You can add notes by clicking this green button, the notes will
            automaticly saved. You can also delete the notes one by one by
            clicking the trash icon in each note or just clear all the notes by
            clicking the red button below.
          </p>
          <div>
            <button className="button" onClick={() => addNote()}>
              <i className="fa fa-solid fa-plus button-font">
                <p>New Note</p>
              </i>
            </button>
            <button className="button" onClick={() => clearAll()}>
              <i className="fa fa-solid fa-trash button-font">
                <p>Clear Notes</p>
              </i>
            </button>
          </div>
        </div>
        <div className="table-note">
          <div className="notes">
            <h1>Note List</h1>
          </div>
          {notes.length === 0 ? (
            <p className="notes">Tidak ada data</p>
          ) : (
            <div>
              {notes.map((note, index) => (
                <div key={index} className={`${note.color} `}>
                  <div className="form-note">
                    <textarea
                      value={note.text}
                      onChange={(e) => {
                        const updatedNotes = [...notes];
                        updatedNotes[index].text = e.target.value;
                        setNotes(updatedNotes);
                        adjustTextareaHeight(e, index);
                      }}
                      placeholder="Write your note here..."
                      style={{
                        height: "auto",
                        minHeight: "50px",
                        maxHeight: "300px",
                        resize: "vertical",
                        width: '35rem',
                        fontFamily: "Poppins, sans-serif",
                      }}
                    ></textarea>
                  </div>
                  <div>
                    <button onClick={() => deleteNote(index)}>
                      <i className="fa fa-solid fa-trash"></i>
                    </button>
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
