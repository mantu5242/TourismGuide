import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to home page</h1>
      <Button variant="contained" onClick ={()=>{navigate('/login')}} >Login</Button>
      <Button variant="contained" onClick= {()=>{navigate('/register')}}>Register</Button>
    </div>
  )
}

export default Home
