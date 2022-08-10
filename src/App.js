import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import { v4 } from "uuid"
import NotesFullInfo from './components/NotesFullInfo';

function App() {

  //secret key of local storage
  const NOTES_APP_SECRET_KEY = "NOTES_APP_SECRET_KEY";

  //notes array
  const [notes, setNotes] = useState([])

  //add contact in setnotes
  const addNotes = (note) =>{
    setNotes([...notes,{
      id:v4(),
      note
    }])
  }
    
  // delete note 
  const deleteNote = (id) =>{
      const retriveNotes = notes.filter((note)=>{
        return note.id !== id
      })
      localStorage.setItem(NOTES_APP_SECRET_KEY,JSON.stringify(retriveNotes))
      setNotes(retriveNotes)
    }

   // edit note 
  const editNote = (note,index) =>{
    notes[index].note = note
    setNotes(notes)
    localStorage.setItem(NOTES_APP_SECRET_KEY,JSON.stringify(notes))
  }

  
  //initial fetching notes
  useEffect(()=>{
    const notes = JSON.parse(localStorage.getItem(NOTES_APP_SECRET_KEY))
    if(notes) setNotes(notes)
  },[])

  // set new note
  useEffect(()=>{
    if(notes?.length>0){
      localStorage.setItem(NOTES_APP_SECRET_KEY,JSON.stringify(notes))
    }
  },[notes])

  return (
    <Router>
      <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<NotesList notes={notes} deleteNote={deleteNote}/>}/>
              <Route path='/create' element={<NotesForm addNotes={addNotes} notes={notes}/>}/>
              <Route path='/info/:id' element={<NotesFullInfo notes={notes}/>}/>
              <Route path='/edit/:id' element={<NotesForm addNotes={addNotes} notes={notes} editNote= {editNote}/>}/>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
