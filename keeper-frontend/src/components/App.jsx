import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateArea from "./CreateArea";



function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/keeper/notes")
      .then(response => response.json())
      .then(data => {
        const {data : notes} = data;
        notes.forEach(note => {
          setNotes(prevNotes => {
            return [...prevNotes, note];
          });
        });
      });
  },[]);

  async function handelerror(response) {
    const errorMessage = await response.text();
    const obj = JSON.parse(errorMessage);
    const { error } = obj;
    toast.error(<idv><HighlightOffIcon style={{ color: 'red' }} className="icon"/>{error}</idv>, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
    });
  }

async function handelSuccess(message) {
  toast.success(<div><CheckCircleOutlineIcon className="icon" style={{ color: 'green' }} />{message}</div>, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
  });
}

async function addNote(newNote) {
  try {
    const response = await fetch("http://localhost:8080/keeper/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    });

    if (!response.ok) {
      handelerror(response); 
      return;        
    }
    const {data} = await response.json();
    setNotes(prevNotes => {
      return [...prevNotes, data];
    });
    handelSuccess("Note added successfully!")  
    
  } catch (error) {
    console.error("Error adding note:", error.message);
  }
}

async function deleteNote(id) {
  fetch(`http://localhost:8080/keeper/notes/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        handelerror(response);

        return;
      }
      
      setNotes((prevNotes) =>
        prevNotes.filter((noteItem) => noteItem._id !== id)
      );
      handelSuccess("Note deleted successfully!");
    }).catch((error) => {
      console.error("Error deleting note:", error.message);
    });
}


  return (
    
    <div>

      <ToastContainer 
      closeButton={false} 
      hideProgressBar={true}
      icon={false}
      toastStyle={{borderRadius:"7px",boxShadow:"0 2px 5px #ccc",minHeight:"fit-content",padding:"0px"}}/>     
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="notes-container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          );
        })}
      </div>

            
      {/* <Footer /> */}
    </div>
  );
}

export default App;
