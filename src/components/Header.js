
import { Container, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Container sx={{width:"100%",padding:"20px",color:"white",backgroundColor:"hotpink", boxShadow:"2px 3px 2px 2px white"}}>
        <Typography variant='h3' textTransform={"uppercase"} textAlign="center" style={{fontStyle:"italic",fontFamily:"sans-serif"}}>
            Notes App
        </Typography>
    </Container>
  )
}

export default Header