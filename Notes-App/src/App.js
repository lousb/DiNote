import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {Header, Modal} from "./components"
import { Footer } from './components';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);


  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote =(updatedNote)=>{
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };
  

  const onDeleteNote = (idToDelete) =>{
    setNotes(notes.filter((note)=> note.id != idToDelete));
  };

  const onClearNote = () =>{
    setNotes([]);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  
  
  

  window.onload=function(){
    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    open.addEventListener('click', () =>{
      modal_container.classList.add('show');
    });
  
    close.addEventListener('click', () =>{
      modal_container.classList.remove('show');
    });
  }
  


  return (
    <div className="App">
      
      <Header/>
      <br/>
      
      <div className='note-App'>
        <Sidebar 
          notes={notes} 
          onAddNote={onAddNote} 
          onDeleteNote={onDeleteNote} 
          activeNote={activeNote} 
          setActiveNote={setActiveNote}/>
        <Main
          activeNote={getActiveNote()} onUpdateNote={onUpdateNote}
        />
      </div>
      <Modal onClearNote={onClearNote}/>
      <Footer/>
    </div>
  );
}

export default App;
