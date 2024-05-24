import React from 'react'

const NoteItem = (props) => {
    const {note}=props;
  return (
    <div>
        {note.title} 
        {note.description}
        <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <button className="btn btn-primary mx-2 my-2">Delete Now<FontAwesomeIcon icon="fa-sharp fa-solid fa-trash" /></button>
    <button className="btn btn-primary mx-2 my-2">Edit Now<FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
    <button className="btn btn-primary mx-2 my-2">Insert Now<FontAwesomeIcon icon="fa-solid fa-comment-pen" /></button>
  </div>
</div>
      
    </div>
  )
}

export default NoteItem
