import React from 'react'
import { Container } from "@mui/material"
import Heading from './Heading'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom"

// this card show full information of notes
function NotesFullInfo(props) {
    const params = useParams();
  return (
    <Container style={{marginTop:"20px",padding:"0px"}}>
        <Heading heading={"Notes Info"} btname="Notes List" path="/"/>
        {
            props.notes.map(note => {
             return (note.id === params.id) ?
                <Card sx={{ maxWidth: 500,margin:"auto" }} key={note.id}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {note.note.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {note.note.description}
                        </Typography>
                    </CardContent>
                </Card>:""      
            })
        }
    </Container>
  )
}

export default NotesFullInfo