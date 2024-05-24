import React, { useContext } from 'react'
import noteContext from '../notes/NoteContext';

const AddNote = (props) => {
    const context=useContext(noteContext)
    const {note}=props;
    const handleClick=()=>{

    }
    const OnChange=()=>{

    }
  return (
        <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <button className="btn btn-primary mx-2 my-2" onClick={handleonDelete}>Delete Now<FontAwesomeIcon icon="fa-sharp fa-solid fa-trash" /></button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleonEdit}>Edit Now<FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleonInsert}>Insert Now<FontAwesomeIcon icon="fa-solid fa-comment-pen" /></button>
  </div>
</div>
    
  )
}

export default AddNote
