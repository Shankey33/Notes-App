import React, {createContext, useContext, useState, useEffect} from 'react'

const NotesContext = createContext()

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);

    const [selectedNoteId, setSelectedNoteId] = useState('');

    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes && storedNotes.length > 0) {
            setNotes(storedNotes);
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => {
        setNotes([...notes, note]);
        setIsNew(false);
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
        setSelectedNoteId,
        isNew, 
        setIsNew
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
