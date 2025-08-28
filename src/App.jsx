import React from 'react'
import Header from './Components/Header'
import { NotesProvider } from './NotesContext'
import List from './Components/List'
import Note from './Components/Note'

const App = () => {
  
  return (
    <NotesProvider>
    <div className='app'>
      <Header />
      <List />
      <Note />
    </div>
    </NotesProvider>
  )
}

export default App
