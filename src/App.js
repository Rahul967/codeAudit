import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Evaluate from './Components/Evaluate';
import Dashboard from "./Components/DashBoard.jsx"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Evaluate/>} />
    </Routes>
   
    </>
    
  );
}

export default App;
