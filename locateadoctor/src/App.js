import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SymptomsInput from "./Pages/SymptomsInput/SymptomsInput";
import Prediction from "./Pages/Prediction/Prediction";
import FindDoctor from "./Pages/FindDoctor/FindDoctor";
import DoctorDashboard from './Pages/DoctorDashboard/DoctorDashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
function App() {
  const [loggedUserId, setLoggedUserId] = useState('');
  return (
    <div className="App-main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoggedUserId={setLoggedUserId}/>} />
          <Route path="/home" element={<Dashboard loggedUserId={loggedUserId}/>} />
          <Route path="/SymptomsInput" element={<SymptomsInput />} />
          <Route path="/Prediction" element={<Prediction />} />
          <Route path="/FindDoctor" element={<FindDoctor loggedUserId={loggedUserId}/>} />
          <Route path="/Doctor" element={<DoctorDashboard/>} />
          <Route path="/Admin" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
