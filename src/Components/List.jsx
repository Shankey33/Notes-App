import React from 'react'
import Search from './Search'
import {useNotes} from '../NotesContext'
import { useState } from 'react'

const List = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const {notes, setSelectedNoteId, setIsNew, isMobileMenuOpen, setIsMobileMenuOpen} = useNotes();

    const groupedNotes = notes.reduce((groups, note) => {
        const category = note.category || 'General';
        if (!groups[category]) groups[category] = [];
        groups[category].push(note);
        return groups;
    }, {});

    const searchedNotes = searchTerm !== ''?(notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.category.toLowerCase().includes(searchTerm.toLowerCase())
    )): (null);


    const handleNoteCardClick = (id) => {
        setSelectedNoteId(id);
        // Close mobile menu when note is selected on mobile
        setIsMobileMenuOpen && setIsMobileMenuOpen(false);
    }

    const handleAddNote = () => {
        setSelectedNoteId('');
        setIsNew(true);
        // Close mobile menu when adding new note on mobile
        setIsMobileMenuOpen && setIsMobileMenuOpen(false);
    }

    return (
    <div className={`list-container${isMobileMenuOpen ? ' mobile-menu-open' : ''}`}>
        <div className="notes-container-search-bar">
        <Search setSearchTerm={setSearchTerm}/>
        <i className="fa-solid fa-circle-plus" onClick={handleAddNote}></i>
        </div>
        <div className='notes-list'>
            <div className="category-container">
            
            {searchedNotes !== null ?
            searchedNotes.map(note => (
                <div className="note-card-list" key={note.id} onClick={() =>handleNoteCardClick(note.id)}>
                    <p>{note.title.length > 50 ? note.title.slice(0, 30) + "..." : note.title}</p>
                    <p>{note.content.length > 70 ? note.content.slice(0, 70)+"..." : note.content}</p>
                </div>
            ))  
            :
            Object.entries(groupedNotes).map(([category, notesInCategory]) => (
                <div className="category" key={category}>
                    <p>{category}</p>
                    {notesInCategory.map(note => (
                        <div key={note.id} className="note-card-list" onClick={() => handleNoteCardClick(note.id)}>
                            <p>{note.title.length > 50 ? note.title.slice(0, 30) + "..." : note.title}</p>
                            <p>{note.content.length > 70 ? note.content.slice(0, 70)+"..." : note.content}</p>
                        </div>
            ))}
                </div>
            ))}
        </div>
        </div>
    </div>
    )
}

export default List
