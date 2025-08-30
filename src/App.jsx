import Header from './Components/Header'
import { NotesProvider } from './NotesContext'
import List from './Components/List'
import Note from './Components/Note'
import React from 'react'

const App = () => {
  return (
    <NotesProvider>
    <div className='app'>
      <Header />
      <div className="note-section">
        <List />
        <Note />
      </div>
    </div>
    </NotesProvider>
  )
}

export default App
