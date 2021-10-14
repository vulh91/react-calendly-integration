import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">
        Welcome to the landing page
      </Typography>

      <Box>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button variant="outlined">App</Button>
        </Link>
      </Box>
    </div >
  )
}
export default LandingPage