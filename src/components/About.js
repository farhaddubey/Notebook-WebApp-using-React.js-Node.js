import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext'

function About() {
  const a=useContext(noteContext)
  return (
    <div>
        This is About
      
    </div>
  )
}

export default About
