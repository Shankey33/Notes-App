import React from 'react'
import Search from './Search'
import {useNotes} from '../NotesContext'

const List = () => {

    const {notes} = useNotes();

    const groupedNotes = notes.reduce((groups, note) => {
        const category = note.category || 'General';
        !groups[category] ? groups[category] = [] : groups[category].push(note);
        return groups;
    }, {});

    return (
    <div className='list-container'>
        <Search />
        <div className='notes-list'>
            <div className="category">
            {Object.entries(groupedNotes).map(([category, notesInCategory]) => (
                <div className="category" key={category}>
                    <p>{category}</p>
                    {notesInCategory.map(note => (
                        <div key={note.id} className="note-card-list">
                            <p>{note.title}</p>
                            <p>{note.content}</p>
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
