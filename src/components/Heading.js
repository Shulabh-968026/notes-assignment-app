import React from 'react'
import { Typography, Button } from "@mui/material"
import { Link } from 'react-router-dom'
function Heading(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginBottom:"20px"}}>
        <Typography variant="h4">{props.heading}</Typography>
        <Link to={props.path} style={{textDecoration:"none"}}>
            <Button variant="contained">{props.btname}</Button>
        </Link>
    </div>
  )
}

export default Heading