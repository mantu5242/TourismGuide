import react, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import bg4 from '../../image/bg4.jpg'
import bg5 from '../../image/bg5.jpg'
import bg6 from '../../image/bg6.jpg'


import './login.css';
import axios from 'axios';
import {message} from 'antd'
const Login = () =>{

  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    // number: '',
    password: ''
  });

  const handleChange = (e) => {
    // Update the state when form fields change
    console.log(e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(formData)
  };


  const handleClick = async(e) => {
    e.preventDefault();
    // console.log(formData)
    try {
        const res=await axios.post('http://localhost:8000/api/v1/user/login',formData)
        // window.location.reload()
        console.log(res)
    //     // dispatch(hideLoading())
        if(res.data.success){
            localStorage.setItem("token",res.data.token)
            message.success("Login Successful")
            navigate('/home')
        }else{
            message.error(res.data.message)
        }
    } catch (error) {
        // dispatch(hideLoading())
        console.log(error)
        message.error("Something went wrong")
      
    }
  }

    return (    
        <div className=' main h-screen flex justify-center items-center'>
            <div className='flex h-screen relative '>
                <div className='w-1/3 blur-sm'><img className='h-full' src={bg4}></img></div>
                <div className='w-1/3 blur-sm'><img className='h-full pr-4' src={bg5}></img></div>
                <div className='w-1/3 blur-sm'><img className='h-full' src={bg6}></img></div>
                {/* <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg" alt="" /> */}
            </div>
            <div className='rounded-md absolute top-30% left-30% w-1/2 h-1/2 flex justify-center items-center bg-white border-solid opacity-60 shadow-md '>
               
                <Box component="form" onSubmit={handleClick}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type='email'
                    autoComplete="email"
                    value = {formData.email}
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    type='password'
                    autoComplete="password"
                    value = {formData.password}
                    onChange={handleChange}
                    autoFocus
            
                />
                 <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, 'opacity !important': 100   }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
                </Box>
            </div>
          
        </div>
    )
};

export default Login;
