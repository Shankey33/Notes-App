import { useNotes } from '../NotesContext'
import { useState } from 'react'

const Note = () => {
  const[editedNote, setEditedNote] = useState({title: '', content: '', category: ''});
  const {notes, selectedNoteId, setSelectedNoteId, deleteNote, editNote, addNote, isNew, setIsNew} = useNotes('');
  
  const newlyCreatedNote = {
    id: notes.length + 1,
    title: editedNote.title,
    content: editedNote.content,
    category: editedNote.category || 'General'
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  const handleAddNote = () => {
    addNote(newlyCreatedNote);
    setEditedNote({ title: '', content: '', category: '' });
  };
  

  const handleNoteDelete = (id) => {
    deleteNote(id);
    setSelectedNoteId('');
  }

  const handleContentChange = (e) => {
    const updatedContent = e.target.value;
    setEditedNote(prevState => ({...prevState, content: updatedContent}));
    editNote(selectedNoteId, {...selectedNote, content: updatedContent});
  }

  const handleTitleChange = (e) => {
    const updatedTitle = e.target.value;
    setEditedNote(prevState => ({...prevState, title: updatedTitle}));
    editNote(selectedNoteId, {...selectedNote, title: updatedTitle});
  }

  const handleCategoryChange = (e) => {
    const updatedCategory = e.target.value;
    setEditedNote(prevState => ({...prevState, category: updatedCategory}));
    editNote(selectedNoteId, {...selectedNote, category: updatedCategory});
  }


  return (
    <div className='note-container'>
      {isNew === false? selectedNote && (
          <><div className="selected-note-title-bar">
          <input type="text" value={selectedNote.title} onChange={e => handleTitleChange(e)}/>
          <button onClick={() => handleNoteDelete(selectedNote.id)}><i className="fa-solid fa-trash"></i></button>
        </div><div className="selected-note-content">
          <textarea value={selectedNote.content} onChange={e => handleContentChange(e)}></textarea>
        </div>
        <div className="selected-note-category">
          <input type="text" value={selectedNote.category} onChange={e => handleCategoryChange(e)} />
        </div>  
        </>
      ):(
      <>
        <div className="new-note-title">
          <input type="text" placeholder='Title' value={editedNote.title} required onChange={e => setEditedNote(prevState => ({...prevState, title: e.target.value}))}/>
        </div>
        <div className="new-note-content">
          <textarea placeholder='Note Content goes here....' value={editedNote.content} onChange={e => setEditedNote(prevState => ({...prevState, content: e.target.value}))} />
        </div>
        <div className="new-note-category">
          <input type="text" placeholder='Category' value={editedNote.category} onChange={e => setEditedNote(prevState => ({...prevState, category: e.target.value}))} />
        </div>
        <button onClick={handleAddNote}>Add Note</button>
        <button onClick={() => setIsNew(false)}>Cancel</button>
      </> 
      )}        
    </div>
  )
}

export default Note
