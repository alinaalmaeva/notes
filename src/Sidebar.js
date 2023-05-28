function Sidebar({notes,  onAddNote, onDeleteNote, setActiveNote, activeNote}){
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Добавить</button>
        </div>
       <div className="app-sidebar-notes">
        {sortedNotes.map((note) =>(
        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
        onClick={() => setActiveNote(note.id)}>

         < div className="sidebar-note-title"> 
         <strong>{note.title}</strong>
         <button onClick={() => onDeleteNote(note.id)}>Удалить</button>
          </div>

          <div className="sidebar-note-tema">
           <p className="p1"> {note.tema} </p> </div>
          <p>{note.body && note.body.substr(0, 100) + "..."}</p>

          <small className="note-meta"> Последнее обновление: {new Date(note.lastModified).toLocaleDateString("en-GB",{hour: "2-digit",minute: "2-digit",})}</small>
          </div>  
        ))}
       
       </div>
    </div>;
}
export default Sidebar;