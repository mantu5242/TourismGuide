import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './Carousel/Navbar';
import Cards from './Carousel/Cards';
import axios from 'axios';
import jwt from 'jsonwebtoken';



const Home = () => {
  const [Token, setToken] = useState();
  const navigate = useNavigate();

  // const verifyToken = (token) => {
  //   try {
  //     // Verify the token using the secret key
  //     const decoded = jwt.verify(token, 'XYZGHS123');
  //     return decoded;
  //   } catch (error) {
  //     // If the token is invalid or has expired, an error will be thrown.
  //     return null; // You can handle the error as needed, e.g., return an error response.
  //   }
  // };

  // if(!verifyToken(Token)){
  //   navigate('/login')
  // }
  

    
      useEffect(() => {
        console.log("i am calling get user")
    getUserData();
  }, []);
    const [user, setUser] = useState([]);
    console.log("outer div")

  const getUserData = async () => {
    console.log("getuser")
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/getUserData", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials:true
      });

      if (res.data.success) { 
        // setUser(res.data.data);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Navbar/>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default Home






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import { Row } from "antd";
// import DoctorList from "../components/DoctorList";

// const Home = () => {
//   const [doctors, setDoctors] = useState([]);

//   const getUserData = async () => {
//     try {
//       const res = await axios.get("/api/v1/user/getAllDoctors", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <Layout>
//       <div>
//         <h1 style={{ textAlign: "center", padding: "20px" }}>Home</h1>
//         <Row>
//           {doctors && doctors.map((doctor) => <DoctorList key={doctor._id} doctor={doctor} />)}
//         </Row>
//       </div>
//     </Layout>
//   );
// };

// export default Home;

