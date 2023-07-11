import React, { useState, useRef, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

function Note(props) {
  
  const contentRef = useRef(null);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleSaveClick() {
    props.onEdit(props.id, editedNote);
    setEditing(false);
  }

  
  return (
    <div ref = {noteRef}>
      {isEditing ? (
        <form className="create-note">
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleInputChange}
          />
          <textarea
            ref={contentRef}
            name="content"
            value={editedNote.content}
            onInput={adjustTextareaHeight} // Use onInput event to dynamically adjust textarea height
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>close</button>
        </form>
      ) : (
        <div className="note">
          <button onClick={handleEditClick}>
            <OpenInFullIcon />
          </button>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;



