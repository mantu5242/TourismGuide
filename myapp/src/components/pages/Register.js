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
import bg2 from '../../image/bg2.jpg'



// import './login.css';
import axios from 'axios';
import {message} from 'antd'
const Register = () =>{

  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    number: '',
    password: '',
    confirmpassword: ''
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
        // dispatch(showLoading())
      const res = await axios.post("http://localhost:8000/api/v1/user/register", formData);
    //   dispatch(hideLoading())
      if (res.data.success) {
        message.success("Register Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
        // dispatch(hideLoading())
      console.log(error); 
      message.error("Something went wrong");
    }
  }

    return (    
        <div className=' main h-screen flex justify-center items-center'>
            <div className='flex h-screen relative '>
                <div className='h-full w-full '><img className='h-full w-full' src={bg2}></img></div>
                {/* <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg" alt="" /> */}
            </div>
            <div className='rounded-md p-4 absolute top-30% left-30% w-1/2  flex justify-center items-center bg-white border-solid opacity-90 shadow-md '>
               
                <Box component="form" onSubmit={handleClick}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    name="name"
                    type='text'
                    // autoComplete="email"
                    value = {formData.name}
                    onChange={handleChange}
                    autoFocus
                />
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
                    id="phonenumber"
                    label="phone number"
                    name="number"
                    // type=''
                    // autoComplete="email"
                    value = {formData.number}
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="oonfirmpassword"
                    label="confirm password"
                    name="confirmpassword"
                    type='password'
                    // autoComplete="password"
                    value = {formData.confirmpassword}
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
              onClick={handleClick}
            >
              Register
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link  href="/login" variant="body2">
                  {"Already have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
                </Box>
            </div>
          
        </div>
    )
};

export default Register;
 