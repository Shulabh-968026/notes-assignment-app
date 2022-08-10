import React from 'react'
import {  Paper, Typography, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom"
function NotesInfo(props) {
    const { title } = props.note.note
    
    // notes display 
  return (
    <Paper elevation={2} sx={{display:"flex",justifyContent:"space-between", alignItems:"center",marginBottom:"20px"}}>

        <Link to={`/info/${props.note.id}`} style={{color:"black",textDecoration:"none"}}>
            <Typography p={2} variant="h6">{title}</Typography>
        </Link>
        
        <ButtonGroup style={{marginRight:"20px"}}>
            <Link to={`/edit/${props.note.id}`} style={{color:"black",textDecoration:"none", cursor:"pointer"}}>
                <i className="fa-solid fa-pen"></i>
            </Link>
            <i className="fa-solid fa-trash" 
                onClick={()=>props.deleteNote(props.note.id)} 
                style={{margin:"0px 30px",cursor:'pointer'}}>    
            </i>
        </ButtonGroup>
    </Paper>
  )
}

export default NotesInfo