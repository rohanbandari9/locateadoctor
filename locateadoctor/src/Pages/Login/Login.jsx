import React, { useState } from 'react';
import db from '../../firebase';
import { Link, useNavigate } from "react-router-dom";
import UserAuth from './UserAuth';
import "./Login.css";
import Button from "../../components/ui/Button";
import { query, where, getDocs, collection } from 'firebase/firestore';
export default function Login({ setLoggedUserId }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({ Username: '', Password: '' });

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value.trim() }));
  };

  const handleOnClick = async () => {
    const CheckData = UserAuth(values);
    setErrors(CheckData);
    const hasNoErrors = Object.values(CheckData).every(error => error === '');
    if (hasNoErrors) {
      // const username = values.Username;
      try {
        // Create a query to search for the user in both 'Users' and 'Doctors' collections
        const userQuery = query(collection(db, "Users"), where("UserName", "==", values.Username));
        const doctorQuery = query(collection(db, "Doctors"), where("UserName", "==", values.Username));
        
        // Execute both queries concurrently
        const [userSnapshot, doctorSnapshot] = await Promise.all([
          getDocs(userQuery),
          getDocs(doctorQuery)
        ]);
        
        // Check if the user exists in either 'Users' or 'Doctors' collection
        if (!userSnapshot.empty || !doctorSnapshot.empty) {
          const userDocs = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          const doctorDocs = doctorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          // Combine results from both collections
          const allDocs = [...userDocs, ...doctorDocs];
          
          // Check password and navigate based on user type
          const foundUser = allDocs.find(doc => doc.Password === values.Password);
          if (foundUser) {
            localStorage.setItem("LogInUserId", foundUser.id);
            if (foundUser.UserType === 'Patient') {
              navigate('/home');
            } else if (foundUser.UserType === 'Admin') {
              console.log('Logged user type is Admin');
            } else {
              navigate('/doctor');
            }
          } else {
            setErrors({ errorMessage: 'Incorrect Password' });
          }
        } else {
          setErrors({ errorMessage: `No user found with Username ${values.Username}` });
        }
      } catch (error) {
        console.error("Error searching for user:", error);
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="login-details">
          <h3 className="login-header d-flex justify-content-center p-2">
            Login
          </h3>
          <div className="d-flex flex-column g-1 px-2 login-inputs">
            <div>Username</div>
            <input type="text" name='Username' className='LoginInput' onChange={handleChange} />
            {errors.Username && <div className="error-message">{errors.Username}</div>}

          </div>
          <div className="d-flex flex-column g-1 px-2 mb-3 login-inputs">
            <div>Password</div>
            <input type="password" name='Password' className='LoginInput' onChange={handleChange} />
            {errors.Password && <div className="error-message">{errors.Password}</div>}
          </div>
          {errors.errorMessage && <div className="error-message">{errors.errorMessage}</div>}
          <Button label="Login" buttonType="primary" handleFunction={handleOnClick} />
          <div>
            Not a member? <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
