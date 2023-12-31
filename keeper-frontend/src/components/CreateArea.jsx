import React, { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const contentRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false); // Reset the isExpanded state to false
    resetTextarea(); // Reset the textarea's size
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  function resetTextarea() {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
    }
  }

  function adjustTextareaHeight() {
    if (contentRef.current) {
      const textarea = contentRef.current;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflowY = "hidden";
    }
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          ref={contentRef}
          name="content"
          onClick={expand}
          onChange={e => {
            handleChange(e);
            adjustTextareaHeight();
          }}
          value={note.content}
          placeholder="Take a note..."
          rows={1} // Set an initial row count to avoid unnecessary scrolling
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


