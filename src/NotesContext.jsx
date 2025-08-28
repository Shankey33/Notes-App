import React, {createContext, useContext, useState} from 'react'

const NotesContext = createContext()

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([
        {id: 1, title: "First Note", content: "This is the content of the first note.", category: "General"}
    ])


    const addNote = (note) => {
    };

    const deleteNote = (id) => {

    };

    const editNote = (id, updatedNote) => {

    };

    const value = {
        notes,
        addNote,
        deleteNote,
        editNote
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
