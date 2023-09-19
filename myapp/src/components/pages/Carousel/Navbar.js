import React from 'react';
import {Link} from "react-router-dom"
import mantu from "../../../image/mantu.jpg"
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <div className='bg-purple-400 absolute z-20 flex flex-row h-20 w-full justify-between font-bold'>
        <div className='flex content-center items-center '>
            <Link className='ml-3 mr-3'>Home</Link>
            <Link className='ml-3 mr-3'>About</Link>
            <label className='ml-3'>Search <input className=' mr-3 h-10 rounded-md pl-3 ml-2 bg-purple-300' style={{width:"30rem"}} type='text' placeholder='search your location'></input></label>
            
        </div>
        <div className='flex content-center items-center justify-end w-1/3'>
            <Dropdown/>
            <h3 className='ml-4'>User</h3>
            <div className='h-10 w-10 rounded-full bg-white ml-7 mr-7'> <img className='rounded-full h-full w-full' src={mantu}></img></div>
        </div>
    </div>
  )
}

export default Navbar
