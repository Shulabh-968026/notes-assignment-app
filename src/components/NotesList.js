import { Container } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import NotesInfo from './NotesInfo';


// display all notes
function NotesList(props) {

    const { notes, deleteNote } = props;

    // notes destructuring 
    const noteInfo = notes.map((note)=><NotesInfo key={note.id} note={note} deleteNote={deleteNote}/>)
  return (
    <Container style={{padding:"0px", marginTop:"20px"}}>
        <Heading heading="Notes List" path="/create" btname="New Note" />
        {
            noteInfo
        }
    </Container>
  )
}

export default NotesList