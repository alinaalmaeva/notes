function Main({ activeNote, onUpdateNote }){
    const onEditField = (key, value) =>{
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
          });
    };
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (
    <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" placeholder="Введите заголовок" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
            <div className="app-main-note-edit-tema">
            <input  type="text" id="tema" placeholder="Введите категорию" value={activeNote.tema} onChange={(e) => onEditField("tema", e.target.value)}/>
            </div> 
            <textarea id="body" placeholder="Введите заметку" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} />
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="preview-tema">{activeNote.tema}</div>
            <div className="markdown-preview">{activeNote.body}</div>
        </div>
    </div>
    );
}
export default Main;