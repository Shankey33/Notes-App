import Header from './Components/Header'
import { NotesProvider } from './NotesContext'
import List from './Components/List'
import Note from './Components/Note'
import React from 'react'
import { useNotes } from './NotesContext'

const AppContent = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNotes();

  return (
    <div className='app'>
      <Header />
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className="note-section">
        <List />
        <Note />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  )
}

export default App
