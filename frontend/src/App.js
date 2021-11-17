import "./App.css";
import { useState } from "react";

import notesList from "./notes";

import { Note } from "./components/Note";

function App() {
  const [notes, setNotes] = useState(notesList);
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const newObj = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    setNotes([...notes, newObj]);
    setNewNote("");
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            content={note.content}
            date={note.date}
            important={note.important}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <div>
          <label htmlFor="newNote">New note</label>
          <input
            type="text"
            value={newNote}
            onChange={handleChange}
            id="newNote"
            name="newNote"
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default App;
