
import React, { useEffect, useState } from 'react'
import { Container, Button,TextField } from "@mui/material"
import { Link, useNavigate, useParams } from 'react-router-dom'
import Heading from './Heading'

// cerate new notes
function NotesForm(props) {

    const navigate = useNavigate()
    const [notesField, setNotesField] = useState({
        title:"",
        description:""
    })
    const params = useParams();
    const [edit,setEdit] = useState(false);
    let index = 0

    useEffect(()=>{
        if(params.id){
            const editNotes = props.notes.filter((note)=>{
                return note.id === params.id ? note : index+1;
            })
            setEdit(true)
            console.log(editNotes)
            setNotesField(editNotes[0].note)
        }
    },[params.id])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(notesField)
        if(notesField.title.trim() === ""){
            alert("Title is required!!")
            return 
        }else if(notesField.title.length<10 && notesField.description.trim().length === 0 ){
            alert("Description is required!!")
            return
        }
        console.log(props.notes)
        const editNotes = props.notes.length>0 && props.notes.filter((note)=>{
            return note.note.title == notesField.title
        })
        console.log(props.notes,editNotes)
        if(editNotes.length > 0){
            alert(`This title ${notesField.title} is already present!!`)
            return
        }
        if(edit){
            props.editNote(notesField,index)
        }else{
            props.addNotes(notesField)
        }
        setNotesField({
            title:"",
            description:""
        })
        navigate("/")
    }
    
  return (
    <Container style={{padding:"0px", marginTop:"20px"}}>
        <Heading heading={ edit ? "Edit Note" : "Create Note"} path="/" btname="Notes"/>
        <form onSubmit={handleSubmit}>
            <TextField
                label={"Title"}
                type={"text"}
                placeholder="Enter title"
                variant='outlined'
                name='title'
                value={notesField.title}
                onChange={(e)=>setNotesField({...notesField,title:e.target.value})}
                fullWidth
                required
            />

            <TextField
                label={"Description"}
                type={"text"}
                placeholder={"Enter Description of note.."}
                fullWidth
                multiline
                rows={5}
                title={"description"}
                style={{marginTop:"20px", marginBottom:"20px"}}
                value={notesField.description}
                onChange={(e)=>setNotesField({...notesField,description:e.target.value})}
                required={notesField.title.length>=10 ? false :true}
            />
            <Button variant="contained" fullWidth type='submit'> { edit ? "Edit": "Add"} Note</Button>
        </form>
    </Container>
  )
}

export default NotesForm