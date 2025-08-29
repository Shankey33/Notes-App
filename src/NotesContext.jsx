import React, {createContext, useContext, useState} from 'react'

const NotesContext = createContext()

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([
        {id: 1, title: "First Note", content: "This is the content of the first note.", category: "General"},
        {id: 2, title: "Second Note", content: "This is the content of the second note.", category: "Work"},
        {id: 3, title: "Third Note", content: "This is the content of the third note.", category: "Personal"}
    ])

    const [selectedNoteId, setSelectedNoteId] = useState('');

    const addNote = (note) => {
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const editNote = (id, updatedNote) => {
        setNotes(notes.map(note => note.id === id ? {...note, ...updatedNote} : note));
    };

    const value = {
        notes,
        addNote,
        deleteNote,
        editNote,
        selectedNoteId,
        setSelectedNoteId
    }

    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    )

}


export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error("useNotes must be used within a NotesProvider");
    }
    return context;
}
