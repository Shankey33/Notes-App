import { useNotes } from '../NotesContext'
import { useState } from 'react'

const Note = () => {
  const[editedNote, setEditedNote] = useState({title: '', content: '', category: ''});
  const {notes, selectedNoteId, setSelectedNoteId, deleteNote, editNote} = useNotes('');

  const selectedNote = notes.find(note => note.id === selectedNoteId);

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
      {selectedNote && (
          <><div className="selected-note-title-bar">
          <input type="text" value={selectedNote.title} onChange={e => handleTitleChange(e)}/>
          <button onClick={() => handleNoteDelete(selectedNote.id)}><i className="fa-light fa-trash"></i></button>
        </div><div className="selected-note-content">
          <textarea value={selectedNote.content} onChange={e => handleContentChange(e)}></textarea>
        </div>
        <div className="selected-note-category">
          <input type="text" value={selectedNote.category} onChange={e => handleCategoryChange(e)} />
        </div>  
        </>
      )}        
    </div>
  )
}

export default Note
