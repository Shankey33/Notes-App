import React, { useState } from 'react'
import { useNotes } from '../NotesContext'

const Header = () => {
  
  const {isMobileMenuOpen, setIsMobileMenuOpen} = useNotes();

  const handleHamMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);  
  }


  return (
    <div className='header'>
      <div className="brand">
        <h4>Notes App</h4>
        <span><i className="fa-slab fa-regular fa-clipboard"></i></span>
      </div>
      <div className='hamburger-menu'>
        <i className="fa-solid fa-bars" onClick={handleHamMenu}></i>
      </div>
      
    </div>

  )
}

export default Header
