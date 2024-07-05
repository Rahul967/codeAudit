import { Routes, Route } from 'react-router-dom';
import Register from "./Components/Register"
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Evaluate from './Components/Evaluate';
import Dashboard from "./Components/Dashboard"
import SignInWithGoogle from './Components/SignInWithGoogle';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    <Navbar/>
    {/* 
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Evaluate/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes> */}
    {/* <Profile/> */}

    {/* <SignInWithGoogle/> */}
    </>
    
  );
}

export default App;
