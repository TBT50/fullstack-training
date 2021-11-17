import "./App.css";

import notes from "./notes";

import { Note } from "./components/Note";

function App() {
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
    </div>
  );
}

export default App;
