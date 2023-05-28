import { useState, useEffect } from 'react';
import uuid from "react-uuid";
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import Search from './Search';
import MeditationAlarm from './Password';
import PasswordReminder from './dop';

function App() {
  const [notes, setNotes]=useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [passwordLastChanged, setPasswordLastChanged] = useState(new Date());
  const reminderInterval = 90; // Интервал напоминания в днях
  const handleDateChange = (event) => {
    setPasswordLastChanged(new Date(event.target.value));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Заголовок",
      tema:"",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote) =>{
    const updatedNotesArray = notes.map((note) => {
      if(note.id===updatedNote.id){
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !==idToDelete));
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Search handleSearchNote={setSearchText}/>
      <div className="App1">
      <Sidebar notes={notes.filter((note) =>
						note.tema.toLowerCase().includes(searchText))} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote} />

      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      <div className="app-note-dop">
      <MeditationAlarm/>
      <input
        type="date"
        value={passwordLastChanged.toISOString().substr(0, 10)}
        onChange={handleDateChange}
      />
      <PasswordReminder
        passwordLastChanged={passwordLastChanged}
        reminderInterval={reminderInterval}
      />
      </div>
      </div>

    </div>
  );
}
export default App;