import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";




function App() {
  const [notes, setNotes] = useState([]);
  

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
